import Vue from 'vue'
import Router from 'vue-router'
import ShoppMall from '@/components/pages/ShoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: ShoppMall
    }
  ]
})
