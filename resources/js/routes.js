import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/Index.vue'
import Geren from './page/Geren.vue'
import Detail from './page/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index},
	{ path: '/geren', component: Geren },
	{ path: '/detail/:id', component: Detail }
  ]
})
// export default [
// 	{ path: '', redirect: '/index'},
// 	{ path: '/index', component: require('./page/App.vue') },
// 	{ path: '/list', component: require('./page/List.vue') },
// 	{ path: '/detail/:id', component: require('./page/Detail.vue') }
// ]