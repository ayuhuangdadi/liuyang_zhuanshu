<template>
  <div class="container">
     <div class="container-box">
         <h1>全程在线服务</h1>
         <span>随时随地了解装修进度</span>
         <div class="phone-box">
             <div class="box-bgimg">
                 <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/online-phone-fangan.d025ae6.jpg" alt="" v-show="showImg">
                 <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/online-phone-bobao.a1c7642.jpg" alt="" v-show="showImg1">
                 <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/online-phone-guanjia.6d51bab.jpg" alt="" v-show="showImg2">
                 <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/online-phone-pingjia.2ca75dd.jpg" alt="" v-show="showImg3">
             </div>
             <div class="box-title">
                 <div class="title-boxs" v-for="(item,index) in tabList" :key="index" @click="show(index)">
                     <div class="title-header">
                        <img :src="item.imgUrl" alt="">
                        <span>{{item.title}}</span>
                     </div>
                     <p>{{item.msg}}</p>
                 </div>
             </div>
         </div>
         <div class="more">了解我的家</div>
     </div>
  </div>
</template>

<script>
import { getTabList } from '../../api/index'
export default {
  name: 'container',
  data () {
    return {
      tabList:[],
      showImg:true,
      showImg1:false,
      showImg2:false,
      showImg3:false,
    }
  },
  created() {
      getTabList().then(res=>{
          this.tabList=res.data
      })
  },
  methods: {
      show(index){
          if(index==0){
            this.showImg=true;
            this.showImg1=false,
            this.showImg2=false,
            this.showImg3=false
          }else if(index==1){
            this.showImg=false;
            this.showImg1=true,
            this.showImg2=false,
            this.showImg3=false
          }
          else if(index==2){
            this.showImg=false;
            this.showImg1=false,
            this.showImg2=true,
            this.showImg3=false
          }
          else if(index==3){
            this.showImg=false;
            this.showImg1=false,
            this.showImg2=false,
            this.showImg3=true
          }
      }
  }
}
</script>

<style lang="less" scoped>
.container{
    width: 1349px;
    height: 770px;
    .container-box{
        width: 1200px;
        height: 770px;
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
        h1{
            width: 411px;
            height: 81px;
            font-weight: 400;
            font-size: 36px;
            border-bottom: 1px solid #999;
            text-align: center;
            line-height: 81px;
            margin: 0 auto;
            padding-top: 40px;
        }
        span{
            display: block;
            margin-top: 10px;
            font-size: 14px;
            color: #707070;
            text-align: center;
        }
        .phone-box{
            width: 1200px;
            height: 383px;
            margin-top: 120px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .box-bgimg{
                width: 324px;
                height: 521px;
                background-image: url(https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/online-phone.13aae19.png);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                img{
                    width: 218px;
                    height: 384px;
                    margin-top: 61px;
                    margin-left: 46px;
                }
            }
            .box-title{
                width: 560px;
                height: 250px;
                margin-left: 80px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .title-boxs:hover{
                    background-color: #f4f7f7;
                }
                .bgcbox{
                    width: 276px;
                    height: 120px;
                    background-color: #f4f7f7;
                }
                .title-boxs{
                    width: 276px;
                    height: 120px;
                    cursor: pointer;
                    .title-header{
                        width: 236px;
                        height: 24px;
                        margin-top: 20px;
                        margin-left: 15px;
                        span{
                            display: block;
                            margin-top: -25px;
                            margin-left: -80px;
                            font-size: 15px;
                            color: #2c3e50;
                        }
                    }
                    p{
                        width: 236px;
                        height: 48px;
                        display: inline-block;
                        margin: 20px 20px;
                    }
                }
            }
        }
    }
}
</style>
