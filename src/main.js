import 'amfe-flexible';
import 'babel-polyfill';
import Es6Promise from 'es6-promise';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import  FastClick  from  'fastclick'

FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Es6Promise.polyfill();
