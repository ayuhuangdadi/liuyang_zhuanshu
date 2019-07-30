<template>
  <div class="home">
    <div class="showroom">
        <div class="showroom-box">
            <h1>造年轻人新家</h1>
            <span>美学设计与VR科技，打造年轻人科技而美的现代感新家</span>
            <div class="card-box">
                <div class="card-box-left">
                    <div class="left-img"><img src="https://cdn-data-prod.z11.ren/data/showroom/cover/1000014c.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176" alt=""></div>
                    <div class="card-msg">
                        <div class="card-name"><p>亲橙里88方美式风格</p></div>
                        <div class="card-price">￥145000<div class="biaoqian">简美风格</div></div>
                    </div>
                </div>
                <div class="card-box-right">
                    <div class="right-img"><img src="https://cdn-data-prod.z11.ren/data/showroom/cover/10000131.jpeg?x-oss-process=image/resize,m_mfit,h_660,w_1176" alt=""></div>
                    <div class="card-msg">
                        <div class="card-name"><p>亲橙里87方北欧风格</p></div>
                        <div class="card-price">￥142000<div class="biaoqian">北欧风格</div></div>
                    </div>
                </div>
            </div>
            <div class="more">更多样板间</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  created() {
      
  },
}
</script>

<style lang="less" scoped>
.showroom{
    width: 100%;
    height: 834px;
    background-color: #f3f6f6;
    .showroom-box{
        width: 1200px;
        height: 834px;
        margin: 0 auto;
        text-align: center;
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
        }
        .card-box{
            width: 1200px;
            height: 435px;
            display: flex;
            justify-content: space-between;
            margin-top: 70px;
            .card-box-left{
                width: 588px;
                height: 405px;
                .left-img{
                    width: 588px;
                    height: 330px;
                    background-color: pink;
                    img{
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                        opacity:1;
                    }
                    img:hover{
                        opacity:0.8;
                        transition: all .3s;
                    }
                }
                .card-msg{
                    text-align: left;
                    margin-top: 10px;
                    .card-name{
                        width: 100%;
                        height: 24px;
                        font-size: 16px;
                        font-weight: 600;
                        color:#2c3e50;
                        p{
                            line-height: 24px;
                            cursor: pointer;
                        }
                        p:hover{
                            color:#49c5b6;
                            transition: all .3s;
                        }
                    }
                    .card-price{
                        color: #ff5114;
                        font-weight: 500;
                        font-size: 16px;
                        margin-top: 10px;
                        cursor: pointer;
                        .biaoqian{
                            width: 86px;
                            height: 28px;
                            background-color: #e5f2f1;
                            color: #0d7568;
                            text-align: center;
                            line-height: 28px;
                            font-size: 12px;
                            margin-top: -25px;
                            margin-left: 100px;
                        }
                    }
                }
            }
            .card-box-right{
                width: 588px;
                height: 405px;
                .right-img{
                    width: 588px;
                    height: 330px;
                    background-color: pink;
                    img{
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                        opacity: 1;
                    }
                    img:hover{
                        opacity: 0.8;
                        transition: all .3s;
                    }
                }
                .card-msg{
                    text-align: left;
                    margin-top: 10px;
                    .card-name{
                        width: 100%;
                        height: 24px;
                        font-size: 16px;
                        font-weight: 600;
                        color:#2c3e50;
                        p{
                            line-height: 24px;
                            cursor: pointer;
                        }
                        p:hover{
                            color:#49c5b6;
                            transition: all .3s;
                        }
                    }
                    .card-price{
                        color: #ff5114;
                        font-weight: 500;
                        font-size: 16px;
                        margin-top: 10px;
                        cursor: pointer;
                        .biaoqian{
                            width: 86px;
                            height: 28px;
                            background-color: #e5f2f1;
                            color: #0d7568;
                            text-align: center;
                            line-height: 28px;
                            font-size: 12px;
                            margin-top: -25px;
                            margin-left: 100px;
                        }
                    }
                }
            }
        }
    }
    
}
</style>
