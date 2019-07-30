<template>
<div>
  <div class="gaishu"></div>
  <div class="service">
    <div class="service-title">
       <div class="topTitle">省力省心，全套家装服务造完美新家</div>
       <div class="bottomTitle">造家为您提供一站式装修服务，包括VR设计、硬装、软装、全屋定制等。全程分阶段验收，您的满意是唯一的标准。</div>
    </div>
    <div class="nav-list">
      <div class="nav" v-for="item in navlist" :key="item.id">
        <div class="nav-img"><img :src="item.imgUrl" alt=""></div>
        <div class="nav-name">{{item.name}}</div>
        <div class="nav-price">{{item.price}}</div>
      </div>
    </div>
  </div>

  <div class="design">
    <div class="design-box">
      <div class="design-title">
        <div class="topTitle">好的设计，值得买单</div>
        <div class="bottomTitle">造家的设计师为您量身定制平面和VR设计方案，每个角落、每展灯都清晰可见，在设计阶段为您还原未来新家，为好设计买单。</div>
      </div>
      <div class="design-img">
        <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/img-01.6736452.png" alt="">
      </div>
      <div class="more">了解VR设计</div>
    </div>
  </div>


  <div class="gongyi">
    <div class="gongyi-box">
      <div class="gongyi-title">
        <div class="topTitle">硬装标准化，杜绝随意增项</div>
        <div class="bottomTitle">造家在施工方面有着远超行业的施工标准和质量把控体系；努力为业主提供便捷和省心的全套家装服务。造家家装价格公开透明，精确计算硬装、软装、主材、辅料用量，让您摆脱计算难题，省心更放心。</div>
      </div>
      <div class="gongyi-img">
        <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/img-02.838b3e0.png" alt="">
      </div>
      <div class="more">了解施工工艺</div>
    </div>
  </div>


  <div class="pinpai">
    <div class="pinpai-box">
      <div class="pinpai-title">
        <div class="topTitle">主材价格锁定，大牌任意挑选</div>
        <div class="bottomTitle">造家拥有强大的供应链体系和严格的选材机制，精选国内外一线品牌。以最低价格，直供消费者，您可享受更大的价格优惠和品质保证。同一价格套餐内，您可自由挑选青睐的品牌，并无需支付额外费用。</div>
      </div>
      <div class="pinpai-img">
        <div class="img-img" v-for="(item,index) in tabslist" :key="item.id">
          <img :src="item.imgUrl" alt="" v-show="index==num">
        </div>
        <div class="tab">
          <div class="tab-img" v-for="(item,index) in tablist" :key="item.id" @mouseover="over(index)">
            <img :src="item.imgUrl" alt="" class="img1">
            <img :src="item.imgUrl1" alt="" class="img2">
          </div>
        </div>
      </div>
      <div class="more-box">
        <div class="more">了解空间详情</div>
        <div class="more">去展厅逛逛</div>
      </div>
      
    </div>
  </div>


  <div class="dingzhi">
    <div class="dingzhi-box">
      <div class="dingzhi-title">
        <div class="topTitle">定制收纳空间，让新家多出20%面积</div>
        <div class="bottomTitle">收纳一直是造家在整体家装设计中最为重要的考虑因素，我们充分研究、整合用户需求，确保设计过程中每个区域的合理布局，满足业主的各类收纳需求。</div>
      </div>
      <div class="dingzhi-img">
        <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/customize-banner-01.7a4e0b5.png" alt="">
      </div>
    </div>
  </div>


  <div class="good">
    <div class="good-box">
      <div class="good-title">
        <div class="topTitle">甄选全网好货，免费省心搭配</div>
        <div class="bottomTitle">造家的设计师为您甄选全网高品质好货，优质服务，安心免费。</div>
      </div>
      <div class="good-img">
        <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/img-03.756d30b.png" alt="">
      </div>
      <div class="more">去展厅逛逛</div>
    </div>
  </div>
</div>
</template>

<script>
import {getNavList,getTbaList,getTabsList} from '../../../api/index'
export default {
  name: 'gaishu',
  data(){
    return{
      navlist:[],
      tablist:[],
      tabslist:[],
      num:0
    }
  },
  created() {
    getNavList().then(res=>{
      this.navlist=res.data
    })
    getTbaList().then(res=>{
      this.tablist=res.data
    })
    getTabsList().then(res=>{
      this.tabslist=res.data
    })
  },
  methods: {
    over(index){
      this.num=index
    }
  },
}
</script>

<style lang='less'>
.gaishu{
    width: 1349px;
    height: 500px;
    background-image: url('https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner.d18164d.jpg');
    background-size: cover;
    background-position: 50%;
  }
.service{
    width: 1200px;
    height: 953px;
    margin: 0 auto;
    .service-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 576px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 60px;
      }
      .bottomTitle{
        width: 817px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .nav-list{
      width: 1100px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      .nav:hover{
        border: 1px solid #49b5c6;
        box-sizing: border-box;
      }
      .nav{
        width: 330px;
        height: 268px;
        margin-top: 50px;
        box-sizing: border-box;
        width: 330px;
        height: 268px;
        box-shadow: 2px 0 24px #e1f1ef;
        .nav-img{
          width: 130px;
          height: 103px;
          margin: 20px auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-name{
          width: 75px;
          height: 24px;
          margin: 20px auto;
          text-align: center;
          line-height: 24px;
          font-size: 17px;
        }
        .nav-price{
          width: 83px;
          height: 24px;
          font-size: 16px;
          color: #49b5c6;
          margin: 20px auto;
          text-align: center;
          line-height: 24px;
        }
      }
    }
  }
.design{
  width: 1349px;
  height: 911px;
  background-color: #f4f7f7;
  .design-box{
    width: 1200px;
    height: 911px;
    margin: 0 auto;
    .more{
        width: 190px;
        height: 50px;
        background-color: #f4f7f7;
        color: #49c5b6;
        border: 1px solid #49c5b6;
        box-sizing: border-box;
        font-size: 13px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        margin: 50px auto;
    }
    .more:hover{
        background-color: #49c5b6;
        color: white;
        transition: all .3s;
    }
    .design-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 576px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 80px;
      }
      .bottomTitle{
        width: 817px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .design-img{
      width: 638px;
      height: 388px;
      margin: 80px auto;
    }
  }
}
.gongyi{
  width: 1349px;
  height: 935px;
  .gongyi-box{
    width: 1200px;
    height: 935px;
    margin: 0 auto;
    .more{
        width: 190px;
        height: 50px;
        background-color: #f4f7f7;
        color: #49c5b6;
        border: 1px solid #49c5b6;
        box-sizing: border-box;
        font-size: 13px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        margin: 50px auto;
    }
    .more:hover{
        background-color: #49c5b6;
        color: white;
        transition: all .3s;
    }
    .gongyi-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 576px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 80px;
      }
      .bottomTitle{
        width: 817px;
        height: 48px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .gongyi-img{
      width: 638px;
      height: 388px;
      margin: 80px auto;
    }
  }
}
.dingzhi{
  width: 1349px;
  height: 870px;
  .dingzhi-box{
    width: 1200px;
    height: 870px;
    margin: 0 auto;
    .dingzhi-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 640px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 40px;
      }
      .bottomTitle{
        width: 717px;
        height: 48px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .dingzhi-img{
      width: 638px;
      height: 388px;
      margin: 80px auto;
    }
  }
}
.good{
  width: 1349px;
  height: 911px;
  background-color: #f4f7f7;
  .good-box{
    width: 1200px;
    height: 911px;
    margin: 0 auto;
    .more{
        width: 190px;
        height: 50px;
        background-color: #f4f7f7;
        color: #49c5b6;
        border: 1px solid #49c5b6;
        box-sizing: border-box;
        font-size: 13px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        margin: 50px auto;
    }
    .more:hover{
        background-color: #49c5b6;
        color: white;
        transition: all .3s;
    }
    .good-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 576px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 80px;
      }
      .bottomTitle{
        width: 817px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .good-img{
      width: 638px;
      height: 388px;
      margin: 80px auto;
    }
  }
}

.pinpai{
  width: 1349px;
  height: 905px;
  background-color: #f4f7f7;
  .pinpai-box{
    width: 1200px;
    height: 905px;
    margin: 0 auto;
    .more-box{
      width: 460px;
      height: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .more{
        width: 190px;
        height: 50px;
        background-color: #f4f7f7;
        color: #49c5b6;
        border: 1px solid #49c5b6;
        box-sizing: border-box;
        font-size: 13px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        margin: 50px auto;
      }
      .more:hover{
        background-color: #49c5b6;
        color: white;
        transition: all .3s;
      }
    }
    
    .pinpai-title{
      width: 1200px;
      height: 222px;
      .topTitle{
        width: 576px;
        height: 51px;
        text-align: center;
        line-height: 51px;
        font-size: 36px;
        font-weight: 200;
        margin: 0 auto;
        padding-top: 80px;
      }
      .bottomTitle{
        width: 517px;
        height: 24px;
        text-align: center;
        line-height: 22px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        padding: 40px;
      }
    }
    .pinpai-img{
      width: 1200px;
      height: 300px;
      margin: 80px auto;
      position: relative;
      .img-img{
        width: 441px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        img{
          width: 441px;
          height: 300px;
        }
      }
      .tab{
        width: 559px;
        height: 179px;
        margin-left: 600px;
        padding-top: 50px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .tab-img:first-child{
          border-bottom:1px solid #d2d2d2;
          border-right:1px solid #d2d2d2;
        }
        .tab-img:nth-child(2){
          border-bottom:1px solid #d2d2d2;
          border-right:1px solid #d2d2d2;
        }
        .tab-img:nth-child(3){
          border-bottom:1px solid #d2d2d2;
        }
        .tab-img:nth-child(4){
          border-right:1px solid #d2d2d2;
        }
        .tab-img:nth-child(5){
          border-right:1px solid #d2d2d2;
        }
        .tab-img{
          width: 185px;
          height: 88px;
          cursor: pointer;
          
          .img2{
            display: none;
          }
        }
        .tab-img:hover{
          .img1{
            display: none;
          }
          .img2{
            display: block;
          }
        }
      }
    }
  }
}

</style>
