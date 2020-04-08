// import *** from '***'
import $ from 'jquery';
import './css/index.css';
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Mint from 'mint-ui';
import app from './app.vue';
import router from './router.js'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import Vue from '../node_modules/vue/dist/vue.js';
import './font-awesome-4.7.0/css/font-awesome.css';
import 'mint-ui/lib/style.css'


// 注意:webpack默认只打包js文件,不能打包其他文件
// 需要安装第三方处理文件   npm i style-loader css-loader --D
// 还有在webpack.config.js配置第三文件
// 1.2 安装路由
Vue.use(VueRouter)
Vue.use(Mint);
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios; //写入vue原型,通过this.$axios使用axios
Vue.prototype.$qs = qs        //处理post请求之前的数据


// 路由检测拦截
// const whiteList=['/index'];//不需要登录能访问的path
// router.beforeEach((to, from, next) => {
//   // console.log('beforeEach');
//   var userInfo= JSON.parse(localStorage.getItem("userName"));//获取缓存看是否登录过
//   if(whiteList.indexOf(to.path)<0){//访问了需要登录才能访问的页面
//     if(userInfo){//登录过来直接进去
//       next();
//     }else{
//       if(to.path=='/land'){
//         next();
//       }else{
//         next('/land');
//       }
//     }
//   }
//   else{
//     next();
//   }
// });

 

new Vue({
	el:'#app',
	data:{
		// msg:'123'
	},
	methods:{
		
	},
	 render: c => c(app),
	 router
})


