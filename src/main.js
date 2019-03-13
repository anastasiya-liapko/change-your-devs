import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
// npm install vue-social-sharing
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
