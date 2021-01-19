'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.index.getData(parseInt(ctx.request.query.gid, 10));
    ctx.status = 200;
  }
}

module.exports = TestController;
