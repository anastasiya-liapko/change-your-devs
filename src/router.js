import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior: (to, from, savedPosition) => new Promise((resolve) => {
  //   const position = savedPosition || {}
  //   if (!savedPosition) {
  //     if (to.hash) {
  //       position.selector = to.hash
  //     }
  //     if (to.matched.some((m) => m.meta.scrollToTop)) {
  //       position.x = 0
  //       position.y = 0
  //     }
  //   }
  //   Router.app.$root.$once('triggerScroll', () => {
  //     Router.app.$nextTick(() => resolve(position))
  //   })
  // }),
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
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
