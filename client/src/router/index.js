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
