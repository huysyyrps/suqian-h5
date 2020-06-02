import Vue from 'vue'
import App from './App'
import lodash from 'lodash'
import store from './store';
import system_ from '@/components/system_/index';
Vue.component('system', system_)

Vue.config.productionTip = false
Vue.prototype.$lodash = lodash
// 无数据时显示
import noContent from 'common/uni-common/no_content.vue'
Vue.component('noContent',noContent)

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

