'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async jianlist() {
    const { ctx } = this;
    let jian=[
                {
                  imgUrl:'https://cdn-data-prod.z11.ren/data/showroom/cover/10000053.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176',
                  name:'新湖菲林  北欧风情',
                  price:'￥216500',
                  feng:'北欧风格'
              },
              {
                  imgUrl:'https://cdn-data-prod.z11.ren/data/showroom/cover/1000008d.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176',
                  name:'现代  都市轻奢',
                  price:'￥251603',
                  feng:'清新风格'
              },
              {
                  imgUrl:'https://cdn-data-prod.z11.ren/data/showroom/cover/1000010f.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176',
                  name:'清新美式',
                  price:'￥15000',
                  feng:'简美风格'
              },
              {
                  imgUrl:'https://cdn-data-prod.z11.ren/data/showroom/cover/1000014c.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176',
                  name:'亲橙里88方美式风格',
                  price:'￥145000',
                  feng:'简美风格'
              }
      ]
    ctx.body = jian;
   }
}
module.exports = HomeController;
