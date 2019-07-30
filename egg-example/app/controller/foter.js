'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async Logo() {
    const { ctx } = this;
    let logo=[
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/logo_blue.4cf7bef.png'
      },
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/wx.1ee4504.png'
      },
    ]
    ctx.body = logo;
  }
  async Main() {
    const { ctx } = this;
    let main=[
      [
        {
            name:'关于造家'
        },
        {
            name:'造家理念'
        },
        {
            name:'团队介绍'
        },
        {
            name:'加入造家'
        }
      ],
      [
        {
            name:'帮助中心' 
        },
        {
            name:'装修宝典'
        },
        {
            name:'报价说明'
        },
        {
            name:'品牌故事'
        }
      ],
      [
        {
            name:'服务支持'
        },
        {
            name:'服务保障'
        },
        {
            name:'用户协议'
        },
        {
            name:'售后服务'
        }
      ],
      [
        {
            name:'商业合作'
        },
        {
            name:'设计师入驻'
        },
        {
            name:'供应商合作'
        },
        {
            name:'渠道合作'
        },
        {
            name:'媒体合作'
        },
        {
            name:'品牌合作'
        }
      ]
    ]
    ctx.body = main;
  }
}

module.exports = HomeController;
