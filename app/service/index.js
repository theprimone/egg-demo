'use strict';

const { Service } = require('egg');

const API = 'https://api.snh48.com/m/getmtickets.php';

class TestService extends Service {
  async getData(gid) {
    const result = await this.ctx.curl(API, {
      method: 'GET',
      data: { gid },
      headers: {
        host: 'api.snh48.com',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        accept: '*/*',
      },
      dataType: 'text',
    });

    if (result.status === 200) {
      return result.data.trim();
    }

    this.ctx.throw(result.status, '服务异常 ╮(╯_╰)╭');
  }
}
module.exports = TestService;
