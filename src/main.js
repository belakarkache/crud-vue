import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './assets/scss/app.scss'
import locale from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
