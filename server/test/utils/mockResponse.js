class MockResponse {
  constructor() {}

  status(code) {
    this.code = code;

    return this;
  }

  json(data) {
    this.json = data;

    return this;
  }
}

module.exports = { MockResponse };

