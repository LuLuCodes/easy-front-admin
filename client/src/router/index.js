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
    },
    {
      path: '/401',
      name: 'error_401',
      component: resolve => { require(['../views/error_page/401.vue'], resolve); },
      meta: {
        title: '401-权限不足'
      }
    },
    {
      path: '/500',
      name: 'error_500',
      component: resolve => { require(['../views/error_page/500.vue'], resolve); },
      meta: {
        title: '500-服务端错误'
      }
    },
    {
      path: '*',
      component(resolve) {
        require.ensure(['../views/error_page/404.vue'], () => {
          resolve(require('../views/error_page/404.vue'));
        });
      },
      meta: {
        title: '400-您的页面丢啦'
      }
    }
  ]
});
