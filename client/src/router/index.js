import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login',
      meta: {requiresAuth: false}
    },
    {
      path: '/home',
      name: 'home',
      component(resolve) {
        require.ensure(['../pages/Home.vue'], () => {
          resolve(require('../pages/Home.vue'));
        });
      },
      meta: {requiresAuth: false, title: '首页'}
    },
    {
      path: '/login',
      name: 'login',
      component(resolve) {
        require.ensure(['../pages/Login.vue'], () => {
          resolve(require('../pages/Login.vue'));
        });
      },
      meta: {requiresAuth: false, title: '登录'}
    }
  ]
});
