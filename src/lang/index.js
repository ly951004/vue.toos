import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en/index.js'
import vn from './vn/index.js'
import cn from './cn/index.js'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.lang || 'cn',
    messages: {
        en,
        vn,
        cn
    }
})
// locale.i18n((key, value) => i18n.t(key, value))
export default i18n
