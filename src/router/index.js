import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [      // routers 数组的形式 每个对象都是一个路由 
    {
      path: '/',
      name: 'home',
      redirect: '/fan',
      component: () => import('@/components/home'),
      children: [  //  子路由引入的组件会显示在home组件的router-view中
        {
          path: '/about',
          name: 'about',
          component: () => import('@/components/about'),
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/components/user'),
        },
      ]
    },
    {       //  单路由引入的组件 打开新的路由 会在HTML中展示全新的one组件
      path: '/one',  // 路径
      name: 'one',
      component: () => import('@/components/one'), // 这个路由要展示的组件
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('@/components/model/model'),
    },
    {
      path: '/fan',
      name: 'fan',
      component: () => import('@/components/fan/fan'),
      children:[
        {
          path:'/home1',
          name:'home1',
          component: ()=>import('@/components/fan/home1')
        },
        {
          path:'/about1',
          name:'about1',
          component: ()=>import('@/components/fan/about1')
        },
        {
          path:'/user1',
          name:'user1',
          component: ()=>import('@/components/fan/user1')
        }
      ]
    },
    {
      path: '/wu',
      name: 'wu',
      component: () => import('@/components/wu/wu'),
    },
  ]
})
