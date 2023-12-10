const { createPaginator } = require('prisma-pagination');

class PaginatorService {
  static getPaginator(page) {
    return createPaginator({ page: page, perPage: process.env.LIMIT_PER_PAGE });
  }
}

module.exports = PaginatorService;
