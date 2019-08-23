import Vue from 'vue'
import Router from 'vue-router'
import Index from './index/index.vue'
import Geren from './index/geren.vue'
import Detail from './index/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index},
	{ path: '/index/geren', component: Geren },
	{ path: '/index/detail/:id', component: Detail }
  ]
})
// export default [
// 	{ path: '', redirect: '/index'},
// 	{ path: '/index', component: require('./page/App.vue') },
// 	{ path: '/list', component: require('./page/List.vue') },
// 	{ path: '/detail/:id', component: require('./page/Detail.vue') }
// ]
