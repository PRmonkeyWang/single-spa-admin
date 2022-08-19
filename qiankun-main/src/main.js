import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

import {registerMicroApps, start} from 'qiankun' //新增部分，导入qiankun中的两个方法
const apps = [
{
	name:'qiankun-child', //子应用的名称
	entry:'//localhost:8081',//子应用的域名
	container:'#vueContainer',//承载子应用的容器，在上面App.vue中定义
	activeRule:'/vueChild', // 被激活的子应用的路由
}
]
registerMicroApps(apps);//注册子应用
start();//启动qiankun

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

