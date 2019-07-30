<template>
  <div class="container">
     <div class="container-box">
         <h1>预估装修报价</h1>
         <span>无需注册，快速报价</span>
         <div class="main">
             <div class="main-box">
                 <div class="main-top">总价：<span>￥{{price}}</span></div>
                 <div class="main-content">
                     <div class="content-left">
                         <span class="left-header">计算器</span>
                         <input type="text" placeholder="毛胚房" readonly="readonly" class="input1">
                         <input type="text" class="input2" v-model="num" oninput="value=value.replace(/[^\d]/g,'')">&nbsp;&nbsp;㎡
                         <input type="text" class="input3" v-model="num1">&nbsp;&nbsp;室&nbsp;&nbsp;<input type="text" class="input3" v-model="num2">&nbsp;&nbsp;厅&nbsp;&nbsp;<input type="text" class="input3" v-model="num3">&nbsp;&nbsp;厨&nbsp;&nbsp;<input type="text" class="input3" v-model="num4">&nbsp;&nbsp;卫
                     </div>
                     <div class="yuan" @click="dianji">开始<br/>计算</div>
                     <div class="content-right">
                         <div class="right-box">硬装：<span>￥{{yingzhuang}}</span></div>
                         <div class="right-box">定制：<span>￥{{dingzhi}}</span></div>
                         <div class="right-box">软装：<span>￥{{ruanzhuang}}</span></div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="more">了解装修套餐</div>
     </div>
  </div>
</template>

<script>
// import { getTabList } from '../../api/index'
export default {
  name: 'container',
  data () {
    return {
      price:'',
      yingzhuang:'',
      dingzhi:'',
      ruanzhuang:'',
      num:'140',
      num1:'5',
      num2:'2',
      num3:'1',
      num4:'0',
    }
  },
  watch: {
      num(){
          if(this.num>140||this.num.length>3){
              this.num=140
          }
      },
      num1(){
          if(this.num1>5||this.num1.length>1){
              this.num1=5
          }
      },
      num2(){
          if(this.num2>5||this.num2.length>1){
              this.num2=5
          }
      },
      num3(){
          if(this.num3>5||this.num3.length>1){
              this.num3=5
          }
      },
      num4(){
          if(this.num4>5||this.num4.length>1){
              this.num4=5
          }
      }
  },
  methods: {
      dianji(){
          let priceM = 2000;
          let priceS = 1800;
          let priceT = 1500;
          let priceC = 1300;
          let priceW = 1200;
          this.yingzhuang=this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW;
          this.dingzhi=(this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW)/2;
          this.ruanzhuang=(this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW)/4;
          this.price=this.yingzhuang+this.dingzhi+this.ruanzhuang
      }
  },
  created() {
      let priceM = 2000;
          let priceS = 1800;
          let priceT = 1500;
          let priceC = 1300;
          let priceW = 1200;
          this.yingzhuang=this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW;
          this.dingzhi=(this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW)/2;
          this.ruanzhuang=(this.num*priceM+this.num1*priceS+this.num2*priceT+this.num3*priceC+this.num4*priceW)/4;
          this.price=this.yingzhuang+this.dingzhi+this.ruanzhuang
      
  },
}
</script>

<style lang="less" scoped>
.container{
    width: 1349px;
    height: 770px;
    background-color: #f4f7f7;
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
        .main{
            width: 936px;
            height: 404px;
            background-color: white;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .main-box{
                width: 908px;
                height: 376px;
                border: 1px solid red;
                .main-top{
                    width: 692px;
                    height: 28px;
                    margin: 0 auto;
                    margin-top: 40px;
                    text-align: center;
                    font-weight: 700;
                    font-size: 17px;
                    line-height: 28px;
                    span{
                        font-weight: 700;
                        color: red;
                        font-size: 17px;
                        display: inline;
                    }
                }
                .main-content{
                    width: 692px;
                    height: 200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .content-left{
                        width: 276px;
                        height: 200px;
                        .left-header{
                            font-size: 16px;
                            color: #333;
                        }
                        .input1{
                            width: 250px;
                            height: 30px;
                            padding-left: 20px;
                        }
                        .input2{
                            width: 230px;
                            height: 30px;
                            text-align: center;
                            margin-top: 20px;
                        }
                        .input3{
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            margin-top: 20px;
                        }
                    }
                    .content-right{
                        width: 266px;
                        height: 200px;
                        padding-top: 25px;
                        .right-box{
                            width: 246px;
                            height: 48px;
                            line-height: 48px;
                            text-align: left;
                            padding-left: 20px;
                            font-size: 14px;
                            color: rgb(191, 191, 191);
                            border-bottom: 1px solid rgb(191, 191, 191);
                            span{
                                font-weight: 700;
                                color: red;
                                font-size: 17px;
                                display: inline;
                            }
                        }
                    }
                    .yuan{
                        width: 109px;
                        height: 109px;
                        margin: 0 auto;
                        border-radius: 50%;
                        background-color: #ffd401;
                        font-size: 18px;
                        color: #333;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 700;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
