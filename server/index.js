const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const requestIp = require("request-ip");

require("./services/paymentResolveIntervalService");
require("./events/listeners/paymentListener");
const { logError, handleError } = require("./errors/middleware");

const paymenentsNofity = require("./routes/paymentNotify");
const offersRouter = require("./routes/definitions/offersRoutesDefinitions");
const accountPacketsRouter = require("./routes/definitions/accountPacketsRoutesDefinitions");
const boostRoutes = require("./routes/definitions/boostRoutesDefinitions");
const verifyAccountRoutes = require("./routes/definitions/verifyAccountRoutesDefinitions");
const authRoutes = require("./routes/definitions/authRoutesDefinitions");
const adminUserRoutes = require("./routes/definitions/adminUserRoutesDefinitions");
const featureRoutes = require("./routes/definitions/featureRouteDefinitions");
const adminFeatureRoutes = require("./routes/definitions/adminFeatureRoutesDefinitions");
const offerViewsRoutes = require("./routes/definitions/offerViewsRoutesDefinitions");
const socialMediaRoutes = require("./routes/definitions/socialMediaRoutesDefinitions");
const userRotuer = require("./routes/definitions/userRoutesDefinitions");
const initializeChatsIo = require("./routes/chat");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(requestIp.mw());
app.use(bodyParser.json({ limit: "250mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "250mb",
    extended: true,
  }),
);

initializeChatsIo(io);

app.use("/", offersRouter);
app.use("/", userRotuer);
app.use("/", accountPacketsRouter);
app.use("/", boostRoutes);
app.use("/", authRoutes);
app.use("/", verifyAccountRoutes);
app.use("/", featureRoutes);
app.use("/", adminUserRoutes);
app.use("/", adminFeatureRoutes);
app.use("/", offerViewsRoutes);
app.use("/", socialMediaRoutes);

app.use("/payments", paymenentsNofity);
app.use("/static", express.static(process.env.APP_MEDIA_PATH));
app.use(logError);
app.use(handleError);

server.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
`),
);
