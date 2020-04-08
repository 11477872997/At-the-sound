import VueRouter from 'vue-router'

// 导入对应的路由组件
import Register from './components/login/register.vue'
import Login from './components/login/login.vue'
import app from './app.vue'
import Land from './components/land/land.vue'
import IX from './components/IX/IX.vue'
import wid from './components/tarbar/widget.vue'
import musicGC from './components/musicGC/MusicSquare.vue'
import dt from './components/musicGC/dt.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/index' },
    { path: '/app', component: app },
    { path: '/land', component: Land ,redirect: '/land/login' ,
			children:[
				{path: 'login', component: Login },
				{path: 'register', component: Register} 
			],
	},
    { path: '/index', component: IX },
    { path: '/wid', component: wid },
    { path: '/musicGC', component: musicGC },
    { path: '/dt', component: dt },
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router