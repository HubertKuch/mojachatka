const proxyquire = require("proxyquire");

exports.mochaHooks = {
  beforeEach: function () {},

  afterAll: function () {
    // one-time final cleanup
  },
};
