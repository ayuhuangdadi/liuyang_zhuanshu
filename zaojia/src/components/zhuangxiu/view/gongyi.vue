<template>
  <div class="kongjian">
    <div class="BGI"></div>
    <div class="texts">行业领先的精湛工艺，只为打造理想家园</div>
    <div class="main-box">
      <div class="main">
        <div class="main-title"><i></i>开工准备</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[0]" :key="item.id">
            <router-link to="">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="main-title"><i></i>二、水电工程</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[1]" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="main">
        <div class="main-title"><i></i>三、泥木工程</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[2]" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="main">
        <div class="main-title"><i></i>四、油漆工程</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[3]" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="main">
        <div class="main-title"><i></i>五、安装工程</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[4]" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="main">
        <div class="main-title"><i></i>六、竣工验收</div>
        <div class="main-list">
          <div class="nav" v-for="item in dataList[5]" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="hrr"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'kongjian',
  data(){
    return{
      dataList:[]
    }
  },
  methods: {
    ...mapActions([
      'getData',
    ])
  },
  created() {
    this.getData().then(res=>{
      this.dataList=res.data
    })
  },
}
</script>

<style lang='less' scoped>
.kongjian{
  width: 100%;
  background-color: #f4f7f7;
  .BGI{
    width: 100%;
    height: 500px;
    background-image: url(https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner.f5ae4ec.jpg);
    background-size: cover;
    background-position: 50%;
  }
  .texts{
    margin-top: 97px;
    font-size: 36px;
    color: #333;
    text-align: center;
  }
  .main-box{
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 62px auto 0;
    .hrr{
      margin-top: 170px;
    }
    .main{
      box-sizing: border-box;
      width: 100%;
      background-color: #fff;
      padding: 90px 66px;
      margin-top: 25px;
      .main-title{
        width: 1068px;
        height: 20px;
        font-size: 18px;
        line-height: 20px;
        display: flex;
        i{
          width: 4px;
          height: 20px;
          background-color: #49c5b6;
          margin-right: 10px;
          display: block;
        }
      }
      .main-list{
        width: 1068px;
        height: 64px;
        display: flex;
        margin-top: 48px;
        flex-wrap: wrap;
        .nav{
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAdCAYAAABbjRdIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzBBRDY2MzFEQUZBMTFFN0IxMkNDQjFCOUQ4QURBNTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzBBRDY2MzJEQUZBMTFFN0IxMkNDQjFCOUQ4QURBNTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMEFENjYyRkRBRkExMUU3QjEyQ0NCMUI5RDhBREE1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMEFENjYzMERBRkExMUU3QjEyQ0NCMUI5RDhBREE1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqYk6KgAAAIXSURBVHjaYvQ8uq2GgYGhGYi/AvE/BtqBz4z///9n8Dq2fT2QE8BAY8AEIrZZeQYCqXU0tgviMxgA+nA3kHIhVrcevxBR6i59fIdpGdTC00DKhBhDgCHCsPTxHTCbm4WFgZuZleHVz+8oaqJlVUBmgi1jwmKGAxDfJNZ3Sx/fBmMQEGfnhItf/vQWLo4SZ2iu/Qr12StiLYyWVWWwFBJnOPHuJdgSSyEx3AkEi4VfoBa+I2QRyDdf//xmyLl4lMFFTJohTUGTYc+rp7B4ImwZ1MLHQMoGiH8SspCbhZWhVt2I4e7Xzwwbnz9gsAD6slBFj0GJm484y6AWXgdS5oQsAwVd881zYF+KsXOB2SBLQT4m2jIouAhKpLgkXwJTH8hHyty8DBVXT4It1uMTYrj39RNYDhmwEJkGQGnXH4g3YpPkYWZh0OUTZoiSUWX4+vc3OKGAghbdZywklACbgDgHiKdg8x0smYMssQKmRlCQ3qPAMhCYCsRsQNwHE+jQxh6lzqKYYixklHH9QCwCxFWgOMKWxHEVaUxkFqrVQDydkEVI5SJFloFAFhDPI7mKoQAkA/FuelkGAm5AvI9eloETHxDfoJdlIGAKxPfoZRmoprAG4tf0sAwEXgCxMRD/oodlIPAYGqS/6GEZOC9DEw1dLAOBI9CaAgb+0dIyWE0RDWXz09oyUG2/DEg10ToYkS2sB1KFAAEGAHlNsLLwPoWtAAAAAElFTkSuQmCC);
          background-repeat: no-repeat;
          background-position: 100% 0;
          width: 240px;
          height: 44px;
          background-color: #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 24px;
          cursor: pointer;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
