const { faker } = require('@faker-js/faker');
const { Role } = require('@prisma/client');

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

function mockRequest({ data, params, query, } = {}, { randomUser, role = Role.USER } = {}) {
  return {
    data,
    params,
    query,
    payload: randomUser ? { data: { ...createRandomUser(), role } } : undefined
  }
}

module.exports = { mockRequest, createRandomUser };

