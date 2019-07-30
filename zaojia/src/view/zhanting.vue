<template>
  <div class="box">
      <div class="contant">
        <div class="text">狂展厅</div>
        <div class="title">微信扫码</div>
        <div class="code">
          <div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556166523479&di=c8522c4854c1a3e0aba7f6b5baabce9e&imgtype=0&src=http%3A%2F%2Fimg.atobo.com%2FProductImg%2FEWM%2FUWeb%2F2%2F4%2F9%2F0%2F3225%2F24903225%2F1.gif" alt="">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        //
      }
    },
    mounted(){
      //
    },
    computed:{

    },
    methods: {
      //
    }

  }
</script>

<style lang="less" scoped>
.box{
  width: 100%;
  height: 100%;
  background: #49C5B6;
  display: flex;
  align-items: center;
  justify-content: center;
  .contant{
    width: 400px;
    height: 520px;
    background: white;
    .text{
      margin-top: 50px;
      color: #49c5b6;
      font-size: 30px;
      text-align: center;
    }
    .title{
      color: #999;
      margin: 30px 0;
      text-align: center;
    }
    .code{
      width: 90%;
      margin: auto;
      div{
        border-top: 1px gainsboro solid;
        padding-top: 10px;
        width: 100%;
        img{
          width: 80%;
          display: block;
          margin:20px auto;
        }
      }
    }
  }
}
</style>
