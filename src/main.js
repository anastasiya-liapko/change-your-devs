import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
// npm install vue-social-sharing
import SocialSharing from 'vue-social-sharing'
// npm install vue-resource
import VueResource from 'vue-resource'

Vue.use(SocialSharing)
Vue.use(VueResource)

// Vue.http.options.emulateJSON = true
// Vue.http.options.emulateHTTP = true

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

