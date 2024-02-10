const { db } = require("../utils/db");

const { createPaginator } = require("prisma-pagination");
const { createDirectory, createFile } = require("../utils/fileSystem");
const uuid = require("uuid");
const { join } = require("path");
const { rmdir } = require("node:fs/promises");
const { CLIENT_RENEG_LIMIT } = require("tls");

async function getOffers(page, perPage, boosted, user) {
  try {
    const paginate = createPaginator({ page: page, perPage: perPage });

    const where = {};

    if (boosted) {
      where["isBoosted"] = true;
    }

    if (user) {
      where["author"] = user;
    }

    return await paginate(db.offers, {
      where,
      select: {
        id: true,
        author: true,
        title: true,
        description: true,
        region: true,
        type: true,
        city: true,
        properties: true,
        expires: false,
        createdAt: true,
        updatedAt: true,
        OfferFeature: {
          select: {
            Feature: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    return "Server Error";
  }
}

async function getUserOffers(page, perPage, userId) {
  try {
    const paginate = createPaginator({ page: page, perPage: perPage });
    return await paginate(
      db.offers,
      {
        where: userId,
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
          properties: true,
          expires: false,
          createdAt: true,
          updatedAt: true,
        },
      },
    );
  } catch (err) {
    console.error(err);
    return "Server Error";
  }
}

async function getOfferByID(offerID) {
  try {
    return await db.offers.findUnique({
      where: {
        id: offerID,
      },
    });
  } catch (err) {
    return "Offer not found";
  }
}

async function writeImages(dir, base64Arr) {
  return await base64Arr.map(async (img) => {
    const path = join(dir, `${uuid.v4()}.jpg`);

    await createFile(path, img);

    return path;
  });
}

async function removeOfferImages(userId, offerId) {
  const directory = `${process.env.APP_MEDIA_PATH}/${userId}/${offerId}`;

  await rmdir(directory, { recursive: true, maxRetries: 100 });
}

async function appendImages(userId, offerId, properties) {
  const directory = `${process.env.APP_MEDIA_PATH}/${userId}/${offerId}`;

  try {
    await createDirectory(directory);

    const baseDir = `${process.env.APP_MEDIA_PATH}/${userId}/${offerId}/`;
    const newImageArray = await Promise.all(
      await writeImages(baseDir, properties.images),
    );

    properties.images = newImageArray.map((img) =>
      img.replace(process.env.APP_MEDIA_PATH, process.env.APP_MEDIA_URL),
    );

    return await db.offers.update({
      where: {
        id: offerId,
      },
      data: { properties },
    });
  } catch (err) {
    console.error(err);
    return;
  }
}

module.exports = {
  getOffers,
  getOfferByID,
  getUserOffers,
  removeOfferImages,
  appendImages,
};
