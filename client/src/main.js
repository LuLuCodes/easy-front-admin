// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/my.less';

// v-focus directive
import focus from './directive/focus';
import vueWechatTitle from 'vue-wechat-title';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(focus);
Vue.use(vueWechatTitle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
