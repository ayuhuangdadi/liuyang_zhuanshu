<template>
  <div class="container">
     <div class="container-box">
         <h1>全网甄选品质好货</h1>
         <span>替您优选全网好货，省力省心</span>
         <div class="main-list">
            <ul>
                <li v-for="item in mainlists" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
     </div>
     
  </div>
</template>

<script>
import { getmainlist } from '../../api/index'
export default {
  name: 'container',
  data () {
    return {
      mainlists:[]
    }
  },
  created() {
      getmainlist().then(res=>{
          this.mainlists=res.data
      })
  }
}
</script>

<style lang="less" scoped>
.container{
    width: 1349px;
    height: 359px;
    background-color: #f4f7f7;
    .container-box{
        width: 1200px;
        height: 359px;
        margin: 0 auto;
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
        .main-list{
            width: 1200px;
            height: 24px;
            line-height: 24px;
                margin-top: 80px;
            ul{
                width: 400px;
                height: 24px;
                margin: 0 auto;
                li{
                    float: left;
                    text-align: center;
                    margin-left: 55px;
                    color: #707070;
                    cursor: pointer;
                }
                li:hover{
                    color: #49c5b6;
                }
            }
        }
    }
}
</style>
