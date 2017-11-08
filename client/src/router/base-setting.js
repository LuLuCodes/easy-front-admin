import BaseSettingMain from '../pages/BaseSetting/BaseSettingMain.vue';

const routers = [
  {
    path: '/website-setting',
    component: BaseSettingMain,
    title: '官网配置',
    redirect: '/website-setting/carousels-list',
    name: 'website-setting',
    icon: 'ivu-icon-ios-world',
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