import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null; //设置全局变量，用于保存或销毁Vue实例

function render(props){
  let container;
  if(props) {
    container = props.container;
  }
	instance = new Vue({
		router,
		render: h => h(App)
	}).$mount(container ? container.querySelector("#app6") : "#app6");//用于限定当前上下文下的#app，防止与主应用中的#app冲突
}

if(window.__POWERED_BY_QIANKUN__){
	__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}else{
	console.log('子应用独立运行')
  render();
}

export async function bootstrap(props){
	console.log('这里暂时可以什么都不用做，但方法必须要导出')
}

export async function mount(props){
  console.log('从qiankun启动')
	render(props);//从qiankun启动
}

export async function unmount(props){
  console.log('销毁子应用实例')
  instance.$destroy();//销毁子应用实例
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;
}