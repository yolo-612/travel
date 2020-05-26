// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入reset样式，和一像素边框
import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"

//引入fastclick
import fastClick from "fastclick"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false

//使用fastclick
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
