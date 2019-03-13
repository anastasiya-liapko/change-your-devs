import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './components/Home.vue')
        },
        {
          path: '/answer',
          name: 'answer',
          component: () => import(/* webpackChunkName: "about" */ './components/Answer.vue')
        }
      ]
    },
    {
      path: '/result-:id',
      name: 'result',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Result.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
