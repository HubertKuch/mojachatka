const { mockRequest } = require("./mockRequest");
const { MockResponse } = require("./mockResponse");

function useReqRes(req, user) {
  return [mockRequest(req, user), new MockResponse()];
}

module.exports = useReqRes;
