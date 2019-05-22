import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayOut',
      component: LayOut
    }
  ]
})
