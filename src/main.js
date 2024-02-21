 
import App from './App'
import uviewPlus from 'uview-plus'
// import '.env.js' //引入环境变量
 
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
 
// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from './store'
import zhHans from '/src/locale/zh-Hans.json';
import en from '/src/locale/en.json';
import zhHant from '/src/locale/zh-Hant.json'
 
// //语言配置
import { createI18n } from 'vue-i18n'

const messages = {
	en,
	'zh-Hans':zhHans,
	'zh-Hant': zhHant
}
const i18n = createI18n({
	locale:  uni.getLocale(), // 获取已设置的语言,
	legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
	globalInjection: true, // 全局注册$t方法
	messages
})

export function createApp() {
  const app = createSSRApp(App)
  app.use(store).use(uviewPlus).use(i18n);
  uni.$u.setConfig({
  	config: {
  		unit: 'rpx'
  	},
  })
  return {
      app
  }
}
// #endif

