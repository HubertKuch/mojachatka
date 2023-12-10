const { db } = require('../utils/db')
const { getUserByID } = require('./getUsers')
const { addDays } = require('../utils/addDays')
const { Prisma } = require('@prisma/client')
const { createPaginator } = require('prisma-pagination')
const { createDirectory, createFile } = require('../utils/fileSystem')
const uuid = require('uuid');
const { join } = require('path')

async function getOffers(page, perPage, boosted, user) {
  // get 20 offers and give a pagination
  // Sort it by the newest ones
  // delete expiration from each one of them

  try {
    const paginate = createPaginator({ page: page, perPage: perPage })

    const where = {};

    if (boosted) {
      where['isBoosted'] = true;
    }

    if (user) {
      where['author'] = user;
    }

    return await paginate(
      db.offers,
      {
        where,
        select: {
          id: true,
          author: true,
          title: true,
          description: true,
          region: true,
          type: true,
          city: true,
          isBoosted: true,
          properties: true,
          expires: false,
          createdAt: true,
          updatedAt: true,
        }
      }
    )

  } catch (err) {
    console.log(err)
    return "Server Error"
  }
}
// TU KURWA
async function getUserOffers(page, perPage, userId) {
  try {
    const paginate = createPaginator({ page: page, perPage: perPage })
    return await paginate(
      db.offers,
      {
        where: userId
      },
      {
        select: {
          id: true,
          author: true,
          title: true,
          description: true,
          region: true,
          type: true,
          city: true,
          isBoosted: true,
          properties: true,
          expires: false,
          createdAt: true,
          updatedAt: true,
        }
      }
    )

  } catch (err) {
    console.log(err)
    return "Server Error"
  }
}

async function getOfferByID(offerID) {
  try {
    return await db.offers.findUnique({
      where: {
        id: offerID
      }
    })

  } catch (err) {
    return "Offer not found"
  }
}

async function writeImages(dir, base64Arr) {

  return await base64Arr.map(async (img) => {
    const path = join(dir, `${uuid.v4()}.jpg`);

    await createFile(path, img);

    return path;
  });
}

async function appendImages(userId, offerId, properties) {
  const directory = `${process.env.APP_MEDIA_PATH}/${userId}/${offerId}`

  try {
    await createDirectory(directory)

    const baseDir = `${process.env.APP_MEDIA_PATH}/${userId}/${offerId}/`;
    const newImageArray = await Promise.all(await writeImages(baseDir, properties.images));

    properties.images = newImageArray.map(img => img.replace(process.env.APP_MEDIA_PATH, process.env.APP_MEDIA_URL))

    console.log(properties)

    return await db.offers.update({
      where: {
        id: offerId
      },
      data: { properties }
    })
  } catch (err) {
    console.error(err)
    return;
  }
}

async function postOffer(data, userId) {
  try {
    const user = await getUserByID(userId)
    const date = new Date()
    const expiration = addDays(date, 30)
 
    if (!user || user === "User not Found") {
      return null;
    }

    if (user.listings === 0) {
      return false
    }

    try {
      var finalOffer = await db.offers.create({
        data: {
          author: user.id,
          authorName: user.username,
          title: data.title,
          description: data.description,
          price: data.price,
          region: data.region,
          type: data.type,
          sellType: data.sellType,
          city: data.city,
          isBoosted: false,
          properties: data.properties,
          expires: expiration
        }
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2000') {
          return err
        }
        return "Server Error"
      }
    }

    await db.user.update({
      where: {
        id: user.id
      },
      data: {
        listings: user.listings - 1
      }
    })

    await appendImages(user.id, finalOffer.id, data.properties)

    return true

  } catch (err) {
    console.error(err)
    return "Server Error"
  }

}

async function postBoostedOffer(userId, offerId) {
  const date = new Date()
  const expiration = addDays(date, 15)

  try {

    const user = await getUserByID(userId)

    if (user === "User not Found") {
      return user
    }

    if (user.bids === 0) {
      return false
    }

    const offer = await getOfferByID(offerId)

    if (offer === "Offer not found") {
      return offer
    }

    offer.isBoosted = true
    offer.expires = expiration

    await db.BoostedOffers.create({
      data: offer
    })

    await db.user.update({
      where: {
        id: userId
      },
      data: {
        bids: user.bids - 1
      }
    })

    return true
  } catch (err) {
    return "Server Error"
  }
}

async function postBoostedMainOffer(userId, offerId) {
  const date = new Date()
  const expiration = addDays(date, 7)

  try {
    const user = await getUserByID(userId)

    if (user === "User not Found") {
      return user
    }

    if (user.bids === 0) {
      return false
    }

    const offer = await getOfferByID(offerId)

    if (offer === "Offer not found") {
      return offer
    }

    offer.isBoosted = true
    offer.expires = expiration

    await db.MainBoostedOffers.create({
      data: offer
    })

    await db.user.update({
      where: {
        id: userId
      },
      data: {
        premiumBids: user.premiumBids - 1
      }
    })

    return true

  } catch (err) {
    return "Server Error"
  }
}

module.exports = {
  getOffers,
  getOfferByID,
  getUserOffers,
  postOffer,
  postBoostedOffer,
  postBoostedMainOffer,
  appendImages
}
