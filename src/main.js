import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'


import BasicSample from './vault/BasicSample.vue'
import Data from './vault/DataSample.vue'
import Config from './vault/ConfigSample.vue'
import CDN from './vault/CDNSample.vue'

import SpreadsheetBasic from "./spreadsheet/BasicSample.vue";
import SpreadsheetCDN from "./spreadsheet/CDNSample.vue";
import SpreadsheetConfig from "./spreadsheet/ConfigSample.vue";
import SpreadsheetData from "./spreadsheet/DataSample.vue";

import RichtextBasic from "./richtext/BasicSample.vue";
import RichtextData from "./richtext/DataSample.vue";
import RichtextCDN from "./richtext/CDNSample.vue";
import RichtextConfig from "./richtext/ConfigSample.vue";


Vue.config.productionTip = false

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    { path: '/basic', component: BasicSample },
    { path: '/data', component: Data },
    { path: '/config', component: Config },
    { path: '/cdn', component: CDN },
    { path: '*', redirect: '/basic' },

    { path: '/spreadsheet', redirect: '/spreadsheet/basic' },
    { path: '/spreadsheet/basic', component: SpreadsheetBasic },
    { path: '/spreadsheet/cdn', component: SpreadsheetCDN },
    { path: '/spreadsheet/data', component: SpreadsheetData },
    { path: '/spreadsheet/config', component: SpreadsheetConfig },

    { path: '/richtext', redirect: '/richtext/basic' },
    { path: '/richtext/basic', component: RichtextBasic },
    { path: '/richtext/data', component: RichtextData },
    { path: '/richtext/config', component: RichtextConfig },
    { path: '/richtext/cdn', component: RichtextCDN },

  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
