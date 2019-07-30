<template>
  <div class="lunbo">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in lunboimg" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getLunBoImg } from '../../api/index'
export default {
  name: 'lunbo',
  data () {
    return {
      lunboimg:[]
    }
  },
  created() {
      getLunBoImg().then(res=>{
          this.lunboimg=res.data
          console.log(res.data);
      })
  },
}
</script>

<style lang="less" scoped>
.el-carousel__item img{
    width: 100%;
    height: 500px;
}

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
