const proxyquire = require('proxyquire');

exports.mochaHooks = {
  beforeEach: function () {
    proxyquire('../utils/db.js', {
      '@prisma/client': {
        PrismaClient: function() {
          return {
            ds: 'ds'
          }
        }
      }
    })
  },

  afterAll: function () {
    // one-time final cleanup
  }
};

