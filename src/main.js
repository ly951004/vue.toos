import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './lang'
import url from './utils/url'
import request from './utils/request'
import './plugin.js'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype._url = url
Vue.prototype._request = request

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
