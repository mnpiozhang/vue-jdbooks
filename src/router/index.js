import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history',//去除URL中的#号
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: "/",
          component: r => require.ensure([], () => r(require('../page/home')), 'home')
        },
        {
          path: "/222",
          component: r => require.ensure([], () => r(require('../page/222')), '222')
        }
      ]
    }
  ]
})
