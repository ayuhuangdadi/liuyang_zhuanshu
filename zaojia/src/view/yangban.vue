<template>
  <div id="admin">

  <!-- 样板间勾选部分 -->
      <div class="home">


          <div class="btn">
            <span>面积:</span>
            <span class="ipt1">
               <el-checkbox v-model="checked"></el-checkbox>
            </span>
            <span class="bx">
              不限
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkeda"></el-checkbox>
            </span>
            <span class="sz">
              70m²以下
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedb"></el-checkbox>
            </span>
            <span class="sz">
              70-80m²
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedc"></el-checkbox>
            </span>
            <span class="sz">
              80-90m²
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedd"></el-checkbox>
            </span>
            <span class="sz">
              90-110m²
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkede"></el-checkbox>
            </span>
            <span class="sz">
              110-140m²
            </span>
             <span class="ipt2">
               <el-checkbox v-model="checkedf"></el-checkbox>
            </span>
            <span class="sz">
              140m²以上
            </span>
          </div>



          <div class="btn">
            <span>风格:</span>
               <span class="ipt1">
               <el-checkbox v-model="checkedabc"></el-checkbox>
               </span>
               <span class="bx">
                不限
               </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedg"></el-checkbox>
            </span>
            <span class="sz">
              北欧风格
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedh"></el-checkbox>
            </span>
            <span class="sz">
              现代风格
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedi"></el-checkbox>
            </span>
            <span class="sz">
              港式风格
            </span>
             <span class="ipt2">
               <el-checkbox v-model="checkedj"></el-checkbox>
            </span>
            <span class="sz">
              简美风格
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedk"></el-checkbox>
            </span>
            <span class="sz">
              简欧风格
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedl"></el-checkbox>
            </span>
            <span class="sz">
              新中式风格
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedm"></el-checkbox>
            </span>
            <span class="sz">
              中式风格
            </span>
          </div>



          <div class="btn">
            <span>预算:</span>
            <span class="ipt1">
               <el-checkbox v-model="checkedqwe"></el-checkbox>
            </span>
            <span class="bx">
              不限
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedn"></el-checkbox>
            </span>
            <span class="sz">
              10万以下 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedo"></el-checkbox>
            </span>
            <span class="sz">
              10-15万 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedp"></el-checkbox>
            </span>
            <span class="sz">
              15-20万 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedq"></el-checkbox>
            </span>
            <span class="sz">
              20-25万 
            </span>
             <span class="ipt2">
               <el-checkbox v-model="checkedr"></el-checkbox>
            </span>
            <span class="sz">
              25-30万 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkeds"></el-checkbox>
            </span>
            <span class="sz">
              30-40万 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedt"></el-checkbox>
            </span>
            <span class="sz">
              40-60万 
            </span>
            <span class="ipt2">
               <el-checkbox v-model="checkedu"></el-checkbox>
            </span>
            <span class="sz">
              60万以上 
            </span>
          </div>


      </div>
    
    <!-- 样板间排序部分 -->
    <div class="paixu">
      <ul>
      <li>默认排序</li>
      <li>最新发布</li>
      <li>价格排序</li>
      <li>面积排序</li>
    </ul>
    </div>
    
  <!-- 样板间图片部分 -->
  <div class="tp">
    <ul>
      <li v-for='item in jianlist' :key="item.id">
        <img :src="item.imgUrl" alt="">
        <h1>{{ item.name }}</h1>
        <span class="fot">{{ item.price }}</span>
        <span class="fg">{{ item.feng }}</span>
      </li>
    </ul>
  </div>

  <!-- 样板间分页效果 -->
  <div class="fy">
     <span class="gy">上一页</span>
     <span class="ble">1</span>
     <span class="gy">下一页</span>
  </div>

  </div>
</template>

<script>
import { jianlist } from '../api/index'
export default {
  name: 'admin',
   data() {
      return {
        checked:true,
        checkedabc:true,
        checkedqwe:true,
        checkeda:false,
        checkedb:false,
        checkedc:false,
        checkedd:false,
        checkede:false,
        checkedf:false,
        checkedg:false,
        checkedh:false,
        checkedi:false,
        checkedj:false,
        checkedk:false,
        checkedl:false,
        checkedm:false,
        checkedn:false,
        checkedo:false,
        checkedp:false,
        checkedq:false,
        checkedr:false,
        checkeds:false,
        checkedt:false,
        checkedu:false,
        jianlist:''
    }
  },
  created(){
    jianlist().then(res=>{
      this.jianlist = res.data;
    })
  }
}
</script>

<style lang='less'>
#admin {
 width: 100%;
 height:2000px;
 margin: 0 auto;
 background:#F4F7F7;
 overflow: hidden;
 .home{
  width: 1156px;
  height: 186px;
  margin: 100px auto 0;
  background-color:#FFFFFF;
  padding: 30px 22px;
  .btn{
    width:1116px;
    height: 40px;
    margin-bottom: 35px;
    padding-left: 40px;
    overflow: hidden;
    .bx{
       color: #49c5b6;
       font-size: 14px;
       padding-left: 5px;
    }
    .sz{
      color:black;
      font-size: 14px;
      padding-left: 5px;
    }
    .ipt1{
      margin-top:10px;
      margin-left:10px;
    }
    .ipt2{
      margin-top:10px;
      margin-left:30px;
    }
  }
  .btn>span{
    line-height: 40px;
  }
 }
 .paixu{
    width: 1156px;
    margin: 24px auto 0;
    background-color:#FFFFFF;
    padding: 30px 22px;
 }
 .paixu ul{
   display: flex;
 }
 .paixu ul li{
   margin-right: 50px;
   font-size: 14px;
   cursor: pointer;
 }
 .paixu>ul>li:hover{
   color:#49C5B6;
 }
 .paixu>ul>li:first-child{
   color:#49C5B6;
 }
 .tp{
   width:1200px;
   height:890px;
   background: #F4F7F7;
   margin: 30px auto;
 }
 .tp>ul{
   width: 100%;
   height: 890px;
   display: flex;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   -webkit-box-pack: justify;
   -ms-flex-pack: justify;
   justify-content: space-between;
   .fot{
      display: block;
      color: #ff5114;
      font-weight: 700;
      font-size: 16px;
      float: left;
   }
   .fg{
      display: block;
      width: 86px;
      height: 28px;
      background-color: #e5f2f1;
      font-size: 12px;
      color: #0d7568;
      line-height: 28px;
      text-align: center;
      margin-left: 30px;
      float: left;
   }
 }
 .tp>ul>li{
   width: 588px;
   height: 415px;
   margin-bottom:60px;
 }
 .tp>ul>li>img{
   width: 100%;
   height: 350px;
 }
 .tp>ul>li>h1{
   color:black;
   font-size: 16px;
   margin-top: 5px;
   margin-bottom: 5px;
 }
 .fy{
   width:355px;
   height:35px;
   line-height: 35px;
   text-align: center;
   margin:30px auto;
   .gy{
     color: #CBC2CC;
     font-size: 14px;
     cursor:not-allowed;
   }
   .ble{
     font-size: 14px;
     color:#49C5C5;
     pointer-events: none;
   }
 }
}
</style>
