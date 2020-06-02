import Vue from 'vue'
import Vuex from 'vuex'
// import sync from '../npmPackege/node_modules/uni-vuex-sync'

import components from '@/components/system_/store_init.js'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
		...components
    },
    // 启用严格模式
    strict: true,

    plugins: [],
    mutations: {
      hideall(){
        for (const key in components) {
          store.state[key].show=false
        }
      }
	}
})

export default store