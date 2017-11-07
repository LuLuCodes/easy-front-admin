import Vue from 'vue';
import Router from 'vue-router';
import BaseSetting from './base-setting';

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
    },
    {
      path: '/401',
      name: 'error_401',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/401.vue'], () => {
          resolve(require('../pages/ErrorPage/401.vue'));
        });
      },
      meta: {
        title: '401-权限不足'
      }
    },
    {
      path: '/500',
      name: 'error_500',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/500.vue'], () => {
          resolve(require('../pages/ErrorPage/500.vue'));
        });
      },
      meta: {
        title: '500-服务端错误'
      }
    },
    ...BaseSetting,
    {
      path: '*',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/404.vue'], () => {
          resolve(require('../pages/ErrorPage/404.vue'));
        });
      },
      meta: {
        title: '400-您的页面丢啦'
      }
    }
  ]
});
