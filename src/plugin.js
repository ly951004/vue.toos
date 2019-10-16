import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem, Loadmore, DatetimePicker } from 'mint-ui'

Vue.use(Lazyload, {
    error: '',
    loading: ''
})

Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
