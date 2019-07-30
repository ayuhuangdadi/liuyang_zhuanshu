<template>
  <div class="navs">
  
    <div class="nav-box"><div class="navs-box"></div>
        <div class="box-left">
            <img src="data:image/png;base64,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" alt="">
        </div>
        <div class="box-center">
            <ul v-for="item in $router.options.routes" :key=item.id>
                <li v-for="items in item.children" :key=items.id active-class="active" exact>
                    <router-link :to="{path:items.path}">{{items.test}}</router-link>
                </li>
            </ul>
        </div>
        <div class="box-right">
            <div class="right-left"><a href="">预约装修</a></div>
            <div class="right-right"><a href="">领取福利</a></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      offsetTop:0,
      searchBarFixed:true,
    }
  },
}
</script>

<style lang="less" scoped>
a{
  color: #49c5b6;
}
.navs{
    width: 1349px;
    height: 80px;
    background-color: white;
    .nav-box{
        width: 1200px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        .box-left{
            width: 92px;
            height: 37px;
            margin-top: 20px;
            img{
                width: 92px;
                height: 37px;
            }
        }
        .box-center{
            width: 510px;
            height: 25px;
            margin-top: 30px;
            ul{
                font-size: 15px;
                line-height: 25px;
                li{
                    float: left;
                    margin-left: 45px;
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
        .box-right{
            width: 200px;
            height: 38px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            .right-left{
                width: 90px;
                height: 38px;
                border: 1px solid #49c5b6;
                box-sizing: border-box;
                line-height: 38px;
                text-align: center;
                cursor: pointer;
                transition: all .3s;
                color: #49c5b6;
            }
            .right-left:hover{
                background-color: #49c5b6;
                a{color: white;}
                transition: all .3s;
            }
            .right-right{
                width: 90px;
                height: 38px;
                border: 1px solid #49c5b6;
                box-sizing: border-box;
                line-height: 38px;
                text-align: center;
                cursor: pointer;
                transition: all .3s;
                color: #49c5b6;
            }
            .right-right:hover{
                background-color: #49c5b6;
                a{color: white};
                transition: all .3s;
            }
        }
    }
}
</style>
