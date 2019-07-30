<template>
  <div class="foter">
    <div class="foter-box">
      <div class="box-left">
        <ul v-for="item in foterlogo" :key="item.id">
          <li><img :src="item.imgUrl" alt=""></li>
        </ul>
      </div>
      <div class="box-center" >
        <div class="center-one">
          <ul>
            <li v-for="item in mainlist[0]" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
        <div class="center-two">
          <ul>
            <li v-for="item in mainlist[1]" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
        <div class="center-three">
          <ul>
            <li v-for="item in mainlist[2]" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
        <div class="center-fore">
          <ul>
            <li v-for="item in mainlist[3]" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="box-right">
        <p>联系我们</p>
        <p>9:00 ~ 21:00</p>
        <div class="zixun">在线客服</div>
      </div>
    </div>
    <span>Copyright ©️ 2017 zaojia520.com Inc.All Rights Reserved. 造家(杭州)科技有限公司
造家(杭州)科技有限公司版权所有 浙ICP备17029108号-1</span>
  </div>
</template>

<script>
import { getFoterLogo,getMainList } from '../api/index'
export default {
  name: 'foter',
  data () {
    return {
      foterlogo:[],
      mainlist:[]
    }
  },
  created() {
    getFoterLogo().then(res=>{
      this.foterlogo=res.data
    })
    getMainList().then(res=>{
      this.mainlist=res.data
    })
  },
}
</script>

<style lang="less" scoped>
.foter{
  width: 100%;
  height: 463px;
  background-color: #333;
  padding: 80px 165px 0;
  box-sizing: border-box;
  span{
    width: 495px;
    height: 88px;
    color: #555;
    font-size: 14px;
    display: block;
    text-align: center;
    padding-top: 50px;
    line-height: 1.5;
    margin: 0 auto;
  }
  .foter-box{
    width: 1010px;
    height: 240px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .box-left{
      width: 244px;
      height: 194px;
      border-right: 1px solid #ccc;
      ul{
        li{
          margin-top: 5px;
        }
      }
    }
    .box-center{
      width: 500px;
      height: 240px;
      display: flex;
      justify-content: space-around;
      color: #8c8c8c;
      font-size: 14px;
      ul{
        li:nth-of-type(1){
          padding-bottom: 20px;
          margin-top: -1px;
        }
        li{
          margin-top: 20px;
        }
      }
    }
    .box-right{
      width: 236px;
      height: 194px;
      border-left: 1px solid #ccc;
      p{
        color:#8c8c8c;
        font-size: 14px;
        margin: 10px 30px;
      }
      .zixun{
        width: 104px;
        height: 35px;
        border-radius: 30px;
        background-color: #555;
        font-size: 14px;
        line-height: 35px;
        text-align: center;
        color: #8c8c8c;
        display: inline-block;
        margin-top: 20px;
        margin-left: 30px;
        transition: all .3s;
      }
      .zixun:hover{
        color: white;
        background-color: #49c5b6;
        transition: all .3s;
      }
    }
  }
}
</style>
