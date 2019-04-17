import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home/myclass',
      name: 'myclass',
      component: () => import('../home/MyClass.vue')
    },
    {
      path: '/home/centerclass',
      name: 'centerclass',
      component: () => import('../home/CenterClass.vue')
    },
    {
      path: '/home/liclass',
      name: 'liclass',
      component: () => import('../home/LiClass.vue')
    },
    {
      path: '/home/systemclass',
      name: 'systemclass',
      component: () => import('../home/SystemClass.vue')
    },
    // ------------------------------------------------------------------
    {
      path: '/videoseeding',
      name: 'videoseeding',
      component: () => import('../views/VideoSeeding.vue')
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: () => import('../views/StartMeeting.vue')
    },
    {
      path: '/database',
      name: 'database',
      component: () => import('../views/DataBase.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/Mine.vue')
    }
  ]
})
