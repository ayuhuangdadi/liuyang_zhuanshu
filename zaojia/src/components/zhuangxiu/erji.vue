<template>
  <div id="erji">
    <div class="ly">
       <div class="tz">
          <ul>
          <li>
            <router-link :to="{path:'/zhuangxiu/gaishu'}">概述</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/sheji'}">VR设计</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/kongjian'}">空间详情</router-link>
          </li>
           <li>
            <router-link :to="{path:'/zhuangxiu/fucai'}">辅材清单</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/gexing'}">个性化项目</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/gongyi'}">工艺规范</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/shouhou'}">售后服务</router-link>
          </li>
          <li>
            <router-link :to="{path:'/zhuangxiu/buchong'}">补充说明</router-link>
          </li>
        </ul>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'erji'
}
</script>

<style lang='less'>
#erji{
 background:white;
 .ly{
    width:100%;
    height:54px;
    background: #F8F8FA;
    .tz{
        width:85%;
        height: 54px;
        margin: 0 auto;
        ul{
          font-size: 14px;
          line-height: 54px;
          li{
              float: left;
              margin-left: 75px;
              a{
                  color: #999;
                  transition: color .3s;
              }
              a:hover{
                  color: #2d2f33;
                  cursor: pointer;
                  transition: color .3s;
              }
          }
          .active{
              border-bottom: 2px solid #49c5b6;
              color: #2d2f33;
          }
        }
    }
  }
}
</style>
