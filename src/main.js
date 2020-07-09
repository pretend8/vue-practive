import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // initial css
import '@/styles/index.scss' // global css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

console.log(process, 'fuck you gay')
console.log(process.env.NODE_ENV, 'fuck env env')

// console.log(process.env.NODE_ENV, 'fuck you gay ')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
