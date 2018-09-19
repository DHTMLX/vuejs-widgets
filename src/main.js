import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'


import BasicSample from './vault/BasicSample.vue'
import Data from './vault/DataSample.vue'
import Config from './vault/ConfigSample.vue'
import CDN from './vault/CDNSample.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
    { path: '/basic', component: BasicSample },
    { path: '/data', component: Data },
    { path: '/config', component: Config },
    { path: '/cdn', component: CDN },
    { path: '*', redirect: '/basic' }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
