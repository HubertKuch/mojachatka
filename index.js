const express = require('express')
const bodyParser = require('body-parser')

require('./services/paymentResolveIntervalService');
require('./events/listeners/paymentListener');
const { logError, handleError } = require('./errors/middleware');

const paymenentsNofity = require('./routes/paymentNotify');
const offersRouter = require('./routes/definitions/offersRoutesDefinitions');
const accountPacketsRouter = require('./routes/definitions/accountPacketsRoutesDefinitions');
const boostRoutes = require('./routes/definitions/boostRoutesDefinitions');
const verifyAccountRoutes = require('./routes/definitions/verifyAccountRoutesDefinitions');
const authRoutes = require('./routes/definitions/authRoutesDefinitions');
const adminUserRoutes = require('./routes/definitions/adminUserRoutesDefinitions');

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(bodyParser.json({ limit: '250mb', extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: '250mb', extended: true
  })
)

app.use('/', offersRouter);
app.use('/', accountPacketsRouter);
app.use('/', boostRoutes);
app.use('/', authRoutes);
app.use('/', verifyAccountRoutes);
app.use('/', adminUserRoutes);
app.use('/payments', paymenentsNofity);
app.use('/static', express.static(process.env.APP_MEDIA_PATH));
app.use(logError);
app.use(handleError);

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
`),
)
