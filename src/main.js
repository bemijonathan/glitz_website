import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import carousel from 'vue-carousel-3d'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(carousel)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
