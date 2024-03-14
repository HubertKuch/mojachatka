const schedule = require("node-schedule");
const ExpiredOffersTreatment = require("../services/ExpiredOffersTreatment");

const job = schedule.scheduleJob("0 */12 * * *", function () {
  ExpiredOffersTreatment.delete().then();
});
