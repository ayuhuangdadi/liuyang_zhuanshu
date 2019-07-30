<template>
  <div class="kongjian">
    <div class="BGI"></div>
    <div class="nav">
      <div class="main">
        <ul>
          <li v-for="(item,index) in navlist" :key="item.id" @click="scrolll(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
<!-- 客厅 -->
    <div class="keting">
      <div class="keting-header">客餐厅</div>
      <div class="keting-content">
        <div class="keting-left">
          <div v-for="item in ketinglist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="keting-right">
            <div class="title">工程施工</div>
            <p v-for="item in ketinglist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in ketinglist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
<!-- 卧室 -->
    <div class="woshi">
      <div class="woshi-header">卧室</div>
      <div class="woshi-content">
        <div class="woshi-left">
          <div v-for="item in woshilist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="woshi-right">
            <div class="title">工程施工</div>
            <p v-for="item in woshilist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in woshilist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
<!-- 厨房 -->
    <div class="chufang" ref="chufang">
      <div class="chufang-header">厨房</div>
      <div class="chufang-content">
        <div class="chufang-left">
          <div v-for="item in chufanglist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="chufang-right">
            <div class="title">工程施工</div>
            <p v-for="item in chufanglist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in chufanglist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
<!-- 卫生间 -->
    <div class="weisheng">
      <div class="weisheng-header">卫生间</div>
      <div class="weisheng-content">
        <div class="weisheng-left">
          <div v-for="item in weishenglist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="weisheng-right">
            <div class="title">工程施工</div>
            <p v-for="item in weishenglist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in weishenglist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
<!-- 阳台 -->   
    <div class="yangtai">
      <div class="yangtai-header">阳台</div>
      <div class="yangtai-content">
        <div class="yangtai-left">
          <div v-for="item in yangtailist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="yangtai-right">
            <div class="title">工程施工</div>
            <p v-for="item in yangtailist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in yangtailist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
<!-- 全屋 -->
    <div class="quanwu">
      <div class="quanwu-header">全屋</div>
      <div class="quanwu-content">
        <div class="quanwu-left">
          <div v-for="item in quanwulist[0]" :key="item.id" class="left-img">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="quanwu-right">
            <div class="title">工程施工</div>
            <p v-for="item in quanwulist[1]" :key="item.id" :class="item.type==0 ? 'margintop' : ''">
              {{item.text}}
            </p>
            <div class="title1">主材配置</div>
            <p v-for="item in quanwulist[2]" :key="item.id">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getkjNavList,getketinglist,getwoshilist,getchufanglist,getweishenglist,getyangtailist,getquanwulist} from '../../../api/index'
export default {
  name: 'kongjian',
  data(){
    return{
      navlist:[],
      ketinglist:[],
      woshilist:[],
      chufanglist:[],
      weishenglist:[],
      yangtailist:[],
      quanwulist:[],
      margintop:''
    }
  },
  methods: {
    scrolll(index){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      switch(index)
      {
        case 0:
        document.documentElement.scrollTop=800;
        break;
        case 1:
        document.documentElement.scrollTop=2100;
        break;
        case 2:
        document.documentElement.scrollTop=3500;
        break;
        case 3:
        document.documentElement.scrollTop=5300;
        break;
        case 4:
        document.documentElement.scrollTop=7500;
        break;
        case 5:
        document.documentElement.scrollTop=8900;
        break;
      }
    }
  },
  created() {
    getkjNavList().then(res=>{
      this.navlist=res.data
    })
    getketinglist().then(res=>{
      this.ketinglist=res.data
    })
    getwoshilist().then(res=>{
      this.woshilist=res.data
    })
    getchufanglist().then(res=>{
      this.chufanglist=res.data
    })
    getweishenglist().then(res=>{
      this.weishenglist=res.data
    })
    getyangtailist().then(res=>{
      this.yangtailist=res.data
    })
    getquanwulist().then(res=>{
      this.quanwulist=res.data
    })
  }
}
</script>

<style lang='less' scoped>
body{
  background-color: #f4f7f7;
}
.kongjian{
  .BGI{
    width: 100%;
    height: 500px;
    background-image: url(https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner.033af47.jpg);
    background-size: cover;
    background-position: 50%;
  }
  .nav{
    width: 100%;
    height: 55px;
    background-color: #e9e9e9;
    .main{
      width: 1200px;
      height: 55px;
      margin: 0 auto;
      ul{
        li{
          width: 200px;
          height: 55px;
          float: left;
          line-height: 55px;
          text-align: center;
        }
        li:hover{
          background-color: white;
        }
      }
    }
  }
  .keting{
    width: 1260px;
    height: 1328px;
    margin: 60px auto;
    background-color: white;
    .keting-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .keting-content{
      width: 1200px;
      height: 1176px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .keting-left{
        width: 575px;
        height: 1176px;
        .left-img{
          margin-top: 10px;
        }
      }
      .keting-right{
        width: 573px;
        height: 1120px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
  .woshi{
    width: 1260px;
    height: 1328px;
    margin: 60px auto;
    background-color: white;
    .woshi-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .woshi-content{
      width: 1200px;
      height: 1176px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .woshi-left{
        width: 575px;
        height: 1176px;
        .left-img{
          margin-top: 10px;
        }
      }
      .woshi-right{
        width: 573px;
        height: 1120px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
  .chufang{
    width: 1260px;
    height: 1720px;
    margin: 60px auto;
    background-color: white;
    .chufang-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .chufang-content{
      width: 1200px;
      height: 1568px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .chufang-left{
        width: 575px;
        height: 1568px;
        .left-img{
          margin-top: 10px;
        }
      }
      .chufang-right{
        width: 573px;
        height: 1568px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
  .weisheng{
    width: 1260px;
    height: 2170px;
    margin: 60px auto;
    background-color: white;
    .weisheng-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .weisheng-content{
      width: 1200px;
      height: 2018px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .weisheng-left{
        width: 575px;
        height: 2018px;
        .left-img{
          margin-top: 10px;
        }
      }
      .weisheng-right{
        width: 573px;
        height: 2018px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
  .yangtai{
    width: 1260px;
    height: 1328px;
    margin: 60px auto;
    background-color: white;
    .yangtai-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .yangtai-content{
      width: 1200px;
      height: 1176px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .yangtai-left{
        width: 575px;
        height: 1176px;
        .left-img{
          margin-top: 10px;
        }
      }
      .yangtai-right{
        width: 573px;
        height: 1120px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
  .quanwu{
    width: 1260px;
    height: 1720px;
    margin: 60px auto;
    background-color: white;
    .quanwu-header{
      width: 100%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #333;
      padding-top: 50px;
    }
    .quanwu-content{
      width: 1200px;
      height: 1568px;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .quanwu-left{
        width: 575px;
        height: 1568px;
        .left-img{
          margin-top: 10px;
        }
      }
      .quanwu-right{
        width: 573px;
        height: 1568px;
        .title{
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 20px;
        }
        .title1{
          font-weight: 700;
          font-size: 14px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        p{
          margin-top: 2px;
          margin-bottom: 2px;
          font-size: 14px;
          line-height: 20px;
          color: #2c3e50;
        }
        .margintop{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
