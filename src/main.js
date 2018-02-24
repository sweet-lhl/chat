// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './assets/script/qc'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/style/base.css'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
