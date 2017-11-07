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
        component(resolve) {
          require.ensure(['../pages/BaseSetting/CarouselsList.vue'], () => {
            resolve(require('../pages/BaseSetting/CarouselsList.vue'));
          });
        },
        name: 'carousels-list',
        meta: {requiresAuth: false, title: '轮播图管理'}
      }
    ]
  }
];

export default routers;