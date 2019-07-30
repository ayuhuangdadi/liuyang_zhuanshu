<template>
  <div id="shouhuo">
    
    <div class="box"></div>
    <div class="bz">售后保障</div>
    <div class="sz">
      <div class="gc">
        <div>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDEwQTVBOTZEQjBEMTFFNzgzNTJGQTQ5NUNGQkM0REQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDEwQTVBOTdEQjBEMTFFNzgzNTJGQTQ5NUNGQkM0REQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTBBNUE5NERCMEQxMUU3ODM1MkZBNDk1Q0ZCQzRERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMTBBNUE5NURCMEQxMUU3ODM1MkZBNDk1Q0ZCQzRERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr49TgEAABHrSURBVHja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" alt="">
           <p>水电工程</p>
        </div>
        <div class="cen">
            免费更换
            <p>水管破裂十年售后</p>
            <p>电线绝缘十年售后</p>
            <p>电线绝缘十年售后</p>
            <p>电面板失灵二年售后</p>
            <p>漏电开关损坏二年售后</p>
            <p>空气开关失灵二年售后</p>
        </div>
        <div class="rgt">
            免费维修
            <p>水管渗水十年售后</p>
            <p>接头漏水十年售后</p>
            <p>电线绝缘十年售后</p>
            <p>电源断路及短路十年售后</p>
            <p>电路故障十年售后</p>
            <p>电视电话电脑线十年售后</p>
        </div>
      </div>
    </div>
   <div class="nt">
      <div class="min">
         <div class="qt">
            免费维修
            <p>墙体发裂二年售后</p>
            <p>地砖空鼓二年售后</p>
            <p>瓷片空鼓二年售后</p>
            <p>沉箱漏水二年售后</p>
         </div>
         <div class="img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTU5MDQwN0JEQjNGMTFFNzlFMDJDMjMzQUQwQkYwRTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTU5MDQwN0NEQjNGMTFFNzlFMDJDMjMzQUQwQkYwRTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTkwNDA3OURCM0YxMUU3OUUwMkMyMzNBRDBCRjBFMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NTkwNDA3QURCM0YxMUU3OUUwMkMyMzNBRDBCRjBFMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjg0GTQAABE5SURBVHja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" alt="">
            <p>泥土工程</p>
         </div>
      </div>
   </div>
   <div class="mg">
     <div class="thb">
        <div>
          免费维修
          <p>天花造型发裂二年售后</p>
        </div>
        <div class="mtgc">
           <div>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkQxOEEwMzJEQjNGMTFFNzkyRDJCRjA4MzZENTNDM0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQxOEEwMzNEQjNGMTFFNzkyRDJCRjA4MzZENTNDM0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRDE4QTAzMERCM0YxMUU3OTJEMkJGMDgzNkQ1M0MzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRDE4QTAzMURCM0YxMUU3OTJEMkJGMDgzNkQ1M0MzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phg5/N0AABMFSURBVHja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" alt="">
           </div>
           <p>木工工程</p>
     </div>
     </div>
   </div>
   <div class="yq">
      <div class="ln">
         <div class="tp">
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMwRjg5RUREQjQwMTFFNzg0RDBFRjgzNzlDNTE5OUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMwRjg5RUVEQjQwMTFFNzg0RDBFRjgzNzlDNTE5OUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MzBGODlFQkRCNDAxMUU3ODREMEVGODM3OUM1MTk5RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MzBGODlFQ0RCNDAxMUU3ODREMEVGODM3OUM1MTk5RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp6EN0EAABQiSURBVHja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" alt="">
            </div>
            <p>油漆工程</p>
         </div>
         <div class="cot">
            免费维修
            <p>表面脱落二年售后</p>
            <p>表面变色二年售后</p>
            <p>墙体发裂二年售后</p>
            <p>表面起泡二年售后</p>
            <p>表面脱落二年售后</p>
         </div>
      </div>
   </div>
   <div class="sm">
      <div class="tc">
        <div class="sp">说明</div>
        <div class="p">
          <p>（1） 套餐中家具、家电、灯具（不含光源）、洁具、地板、橱柜、套装木门、门套及门套线、窗套、五金、瓷砖、铝天花、水槽龙头、烟机、灶具等主材保修壹年。</p>
          <p>（2） 超过质保期的主材及家装基础工程维修，需要收取一定的人工及物料费用。</p>
          <p>（3） 质保期内人为原因造成的损坏，或者使用过程中造成的损坏，不在免费维修范围内。</p>
          <p>（4） 甲方（客户）自动放弃保修、未按时缴纳相关款项以及与项目经理或设计师发生的私自增加项目，不在乙方（公司）售后保修范围之内。</p>
          <p>上述质保期以保修单注明日期为准</p>
        </div>
      </div>
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'shouhuo'
}
</script>

<style lang = "less">
#shouhuo {
 background:white;
 height: 2500px;
 .box{
   width: 100%;
   height:500px;
   background: url('https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner.fa8c36d.jpg');
 }
 .bz{
   width: 100%;
   height: 24px;
   font-size: 36px;
   color: #333;
   background: #F4F7F7;
   text-align: center;
   padding-top: 60px;
 }
 .sz{
   width: 100%;
   height: 328px;
   background: #F4F7F7;
   overflow: hidden;
   .gc{
        box-sizing: border-box;
        width: 1200px;
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 40px auto;
        padding: 43px 260px 43px 204px;
        p{
          font-size: 25px;
          text-align: center;
          margin-top:30px;
        }
        .cen{
          width:140px;
          height: 285px;
          text-align: center;
          color: gray;
          font-size: 14px;
          p{
            text-align: left;
            font-size: 14px;
            margin-top: 18px;
            color: #7e7e7e;
          }
        }
        .rgt{
          width: 154px;
          height: 285px;
          color: gray;
          font-size: 14px;
          text-align: center;
          p{
            text-align: left;
            font-size: 14px;
            margin-top: 18px;
            color: #7e7e7e;
          }
        }
   }
 }
 .nt{
   width:100%;
   height: 328px;
   background: white;
   .min{
      margin: 0 auto;
      box-sizing: border-box;
      width: 647px;
      height: 100%;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 43px 0;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .qt{
        width: 112px;
        height: 190px;
        font-size: 14px;
        color: gray;
        text-align: center;
        p{
          text-align: left;
          font-size: 14px;
          color: gray;
          margin-top: 24px;
        }
      }
      .img{
        width: 134px;
        height: 242px;
        p{
          font-size:25px;
          text-align:center;
          margin-top: 25px;
        }
      }
   }
 }
 .mg{
    width: 100%;
    height: 328px;
    background-color: #f4f7f7;
    margin-top: 40px;
    .thb{
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 auto;
        box-sizing: border-box;
        width: 647px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 43px 0;
        div{
          width: 140px;
          height: 76px;
          color:gray;
          text-align: center;
          font-size: 14px;
          p{
            margin-top: 20px;
            color: #7e7e7e;
          }
        }
        .mtgc{
          width: 134px;
          height: 242px;
          p{
            margin-top: 85px;
            font-size: 25px;
            color: black;
          }
       }
    }
  }
  .yq{
    width: 100%;
    height: 328px;
    background-color: #fff;
    .ln{
      box-sizing: border-box;
      width: 1200px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0 auto;
      padding: 43px 260px 43px 204px;
      height: 100%;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .tp{
        width:134px;
        height: 242px;
          p{
            margin-top: 30px;
            text-align: center;
            font-size: 25px;
            color: black;
          }
      }
      .cot{
        width: 112px;
        height: 228px;
        color: gray;
        font-size: 14px;
        text-align: center;
        p{
          text-align: center;
          font-size: 14px;
          color:gray;
          margin-top: 23px;
        }
      }
    }
  }
  .sm{
    width: 100%;
    height: 430px;
    background-color: #f4f7f7;
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .tc{
      width: 1200px;
      height: 430px;
      margin: 0 auto;
      font-size: 14px;
      padding: 0 40px;
      box-sizing: border-box;
      .sp{
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 100px;
        text-align: left;
        font-weight: 700;
        color: #333;
      }
      .p{
        width: 100%;
        height: 213px;
        margin-top: 30px;
        p{
          text-align: left;
          font-weight: 700;
          color: #333;
          margin-top:30px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
