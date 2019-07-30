'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async GongYiList() {
    const { ctx } = this;
    let GongYiList=[
      [
        {
          name:'成品保护'
        },
        {
          name:'工地规范'
        }, 
        {
          name:'拆改工程'
        }, 
        {
          name:'砌墙'
        },
      ],
      [
        {
          name:'全屋放样'
        },
        {
          name:'水电放样弹线'
        }, 
        {
          name:'水电开槽'
        }, 
        {
          name:'电路工程'
        },
        {
          name:'水路工程'
        },
        {
          name:'水电工程验收'
        },
      ],
      [
          {
            name:'防水工程'
          },
          {
            name:'墙地砖铺贴'
          },
          {
            name:'木工材料进场'
          },
          {
            name:'吊顶工程'
          },
          {
            name:'现场木作'
          },
      ],
      [
        {
          name:'油漆材料进场'
        },
        {
          name:'腻子施工'
        },
        {
          name:'木作油漆'
        }   
      ],
      [
        {
          name:'灯具开关安装'
        },
        {
          name:'卫浴五金安装'
        }, 
      ],
      [
        {
          name:'开荒清洁'
        },
        {
          name:'竣工验收'
        }, 
      ]
    ]
    ctx.body = GongYiList;
  }
}

module.exports = HomeController;
