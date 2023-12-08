const express = require('express')
const bodyParser = require('body-parser')
const { db } = require('./utils/db')

require('./services/paymentResolveIntervalService');
require('./events/listeners/paymentListener');

const login = require('./routes/login')
const register = require('./routes/register')
const refreshToken = require('./routes/refreshToken')
const verifyEmail = require('./routes/verifyEmail')

const createOffer = require('./routes/createOffer')
const createBoostedOffer = require('./routes/createBoostedOffer')
const createBoostedMainOffer = require('./routes/createBoostedMainOffer')
const editOffer = require('./routes/editOffer');
const deleteImage = require('./routes/deleteImage');

const getAllOffers = require('./routes/getAllOffers')
const getUserOffers = require('./routes/getUsersOffer')
const getOfferByID = require('./routes/getOfferByID')
const offerTypes = require('./routes/offertTypes'); 

const getAllPackets = require('./routes/getAccountPackets');
const buyPacket = require('./routes/buyPacket');
const getUserPackets = require("./routes/getUserAccountsPackets");

const getBoostPackets = require('./routes/getBoostPackets');
const getUserBoosts = require("./routes/getUserBoosts");

const paymenentsNofity = require('./routes/paymentNotify');

const { isAuthenticated, isAdmin } = require('./utils/middlewares')
const { getUserByID } = require('./services/getUsers');
const { logError, handleError } = require('./errors/middleware');

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(bodyParser.json({ limit: '250mb', extended: true }));

app.use(
  bodyParser.urlencoded({
    limit: '250mb', extended: true
  })
)

// User Authentication
app.use('/', register)
app.use('/', login)
app.use('/', refreshToken)
app.use('/', verifyEmail)

// Cteate new offer on the website
app.use('/', isAuthenticated, createOffer);
app.use('/', isAuthenticated, editOffer);
app.use('/', isAuthenticated, deleteImage)
app.use('/', isAuthenticated, createBoostedOffer)
app.use('/', isAuthenticated, createBoostedMainOffer)

app.use('/', getAllOffers)
app.use('/', offerTypes)

// ACCOUNT PACKETS
app.use('/', getAllPackets);
app.use('/', isAuthenticated, getUserPackets);
app.use('/', isAuthenticated, buyPacket);

// BOOST PACKETS
app.use('/', getBoostPackets);
app.use('/', isAuthenticated, getUserBoosts);

// PAYMENTS
app.use("/payments", paymenentsNofity);

app.use('/', isAuthenticated, getUserOffers)
app.use('/', getOfferByID)

app.get('/profile', isAuthenticated, async (req, res) => {
  const userId = req.payload.data.id

  const user = await getUserByID(userId)
  delete user.password
  res.status(200).json({ message: "Successfull", user: user })
})

app.get('/admin', isAdmin, async (req, res) => {
  res.status(200).json({ message: "Hello Admin" })
})

app.post('/activate', isAdmin, async (req, res) => {

  const { id } = req.body

  try {

    await db.user.update({
      where: {
        id: id
      },
      data: {
        activated: true
      }
    })

    res.status(200).json({ message: "Activated Successfully" })

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Internal Server Error" })
  }

})

app.use('/static', express.static(process.env.APP_MEDIA_PATH));
app.use(logError);
app.use(handleError);

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
`),
)
