import Vue from 'vue'
import App from './App.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// Vue Select
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
