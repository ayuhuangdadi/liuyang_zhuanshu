import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import zhuangxiu from '@/view/zhuangxiu'
import yangban from '@/view/yangban'
import zhanting from '@/view/zhanting'
import family from '@/view/family'

import Gaishu from '../components/zhuangxiu/view/gaishu'
import Sheji from '../components/zhuangxiu/view/Sheji'
import Kongjian from '../components/zhuangxiu/view/kongjian'
import Fucai from '../components/zhuangxiu/view/fucai'
import Gexing from '../components/zhuangxiu/view/gexing'
import Gongyi from '../components/zhuangxiu/view/gongyi'
import Shouhou from '../components/zhuangxiu/view/shouhou'
import Buchong from '../components/zhuangxiu/view/buchong'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/home',
          name: 'home',
          component: home,
          test:'首页'
        },
        {
          path: '/zhuangxiu',
          name: 'zhuangxiu',
          component: zhuangxiu,
          test:'装修套装',
          children:[
            {path: '/', redirect: '/zhuangxiu/gaishu'},
            {
              path: '/zhuangxiu/gaishu',
              name: 'gaishu',
              component: Gaishu
            },
            {
              path: '/zhuangxiu/Sheji',
              name: 'Sheji',
              component: Sheji
            },
            {
              path: '/zhuangxiu/kongjian',
              name: 'kongjian',
              component: Kongjian
            },
            {
              path: '/zhuangxiu/fucai',
              name: 'fucai',
              component: Fucai
            },
            {
              path: '/zhuangxiu/gexing',
              name: 'gexing',
              component: Gexing
            },
            {
              path: '/zhuangxiu/gongyi',
              name: 'gongyi',
              component: Gongyi
            },
            {
              path: '/zhuangxiu/shouhou',
              name: 'shouhou',
              component: Shouhou
            },
            {
              path: '/zhuangxiu/buchong',
              name: 'buchong',
              component: Buchong
            },
          ]
        },
        {
          path: '/yangban',
          name: 'yangban',
          component: yangban,
          test:'样板间'
        },
        {
          path: '/zhanting',
          name: 'zhanting',
          component: zhanting,
          test:'逛展厅  '
        },
        {
          path: '/family',
          name: 'family',
          component: family,
          test:'我的家'
        }
      ]
    }, 
  ]
})
