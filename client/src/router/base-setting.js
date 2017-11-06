const routers = [
  {
    path: '/base-setting',
    name: 'base-setting',
    component(resolve) {
      require.ensure(['../views/setting-banner.vue'], () => {
        resolve(require('../views/setting-banner.vue'));
      });
    },
    meta: {requiresAuth: false, title: '官网设置-轮播图设置'}
  }
];

export default routers;