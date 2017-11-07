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
      title: '首页',
      component(resolve) {
        require.ensure(['../pages/Home.vue'], () => {
          resolve(require('../pages/Home.vue'));
        });
      },
      meta: {requiresAuth: false}
    },
    {
      path: '/login',
      name: 'login',
      title: '登录',
      component(resolve) {
        require.ensure(['../pages/Login.vue'], () => {
          resolve(require('../pages/Login.vue'));
        });
      },
      meta: {requiresAuth: false}
    },
    {
      path: '/401',
      name: 'error_401',
      title: '401-权限不足',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/401.vue'], () => {
          resolve(require('../pages/ErrorPage/401.vue'));
        });
      },
      meta: {
      }
    },
    {
      path: '/500',
      name: 'error_500',
      title: '500-服务端错误',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/500.vue'], () => {
          resolve(require('../pages/ErrorPage/500.vue'));
        });
      },
      meta: {
      }
    },
    ...BaseSetting,
    {
      path: '*',
      name: 'error_404',
      title: '404-您的页面丢啦',
      component(resolve) {
        require.ensure(['../pages/ErrorPage/404.vue'], () => {
          resolve(require('../pages/ErrorPage/404.vue'));
        });
      },
      meta: {
      }
    }
  ]
});
