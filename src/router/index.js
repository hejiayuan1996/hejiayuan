import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../pages/main'
import My from '../pages/my'
import Tool from '../pages/tool'
import Fa from '../pages/fa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool
    },
    {
      path: '/fa',
      name: 'Fa',
      component: Fa
    }
  ]
})
