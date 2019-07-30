<template>
  <div class="vr">
      <div class="vr-box">
          <h1>可视化的VR设计服务</h1>
          <span>所见即所得，看到未来的家</span>
          <div class="vr-iphone">
              <img src="https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/iphone.a0ba776.png" alt="">
              <div class="vr-move">
                  
              </div>
          </div>
          <div class="more">了解VR设计</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vr',
  data () {
    return {
      
    }
  },
  created() {
      
  },
}
</script>

<style lang="less" scoped>
.vr{
    width: 1349px;
    height: 860px;
    background-color: #f4f7f7;
    .vr-box{
        width: 1200px;
        height: 860px;
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
        .vr-iphone{
            width: 846px;
            height: 429px;
            margin: 80px auto;
            .vr-move{
                width: 792px;
                height: 382px;
                background-color: blue;
                background-image: url('https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/showroom_index.e6613a6.jpeg');
                background-size: auto 100%;
                margin-top: -410px;
                margin-left: 28px;
                cursor: pointer;
                animation: panorama 100s linear infinite alternate;
                @keyframes panorama {
                    to {
                        background-position: 10000% 0;
                    }
                }
            }
        }
    }
}
</style>
