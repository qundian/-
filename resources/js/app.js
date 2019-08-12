import $ from 'jquery'
import Vue from 'vue'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// weui
import weui from 'weui.js'
import 'weui'

window.Vue = require('vue');
import VueRouter from 'vue-router';
import store from './store/index.js'; // vuex 数据存储所需对象
import router from './routes.js';    // 路由配置文件

Vue.use(VueRouter);
Vue.prototype.$weui = weui
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

var vm = new Vue({
  store,
  router
}).$mount('#app');
