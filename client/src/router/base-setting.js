import BaseSettingMain from '../pages/BaseSetting/BaseSettingMain.vue';

const routers = [
  {
    path: '/base-setting',
    component: BaseSettingMain,
    redirect: '/base-setting/carousels-list',
    name: 'base-setting',
    children: [
      {
        path: 'carousels-list',
        name: 'carousels-list',
        title: '轮播图管理',
        icon: 'icon-banner',
        component(resolve) {
          require.ensure(['../pages/BaseSetting/CarouselsList.vue'], () => {
            resolve(require('../pages/BaseSetting/CarouselsList.vue'));
          });
        },
        meta: {requiresAuth: false},
        children: []
      }
    ]
  }
];

export default routers;