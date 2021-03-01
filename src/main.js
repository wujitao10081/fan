// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(ElementUI,VueAxios,axios);

import axios from 'axios'   // 引入 axios 从 ‘axios’
Vue.prototype.axios = axios  // 引入 axios 并绑定在vue的原型上 通过this.axios调用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
