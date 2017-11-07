<template>
  <ul class="home-list clearfix pull-left">
    <li v-for="menu in menuList">
      <home-module-menu
        :menu-desc="menu.menuDesc"
        :menu-title="menu.menuTitle"
        :menu-action="menu.menuAction"
        :menu-link="menu.menuLink"
        :menu-class="menu.menuClass">
      </home-module-menu>
    </li>
  </ul>
</template>

<script>
  import HomeModuleMenu from './HomeModuleMenu.vue';
  export default {
    name: 'home-module-list',
    components: {
      HomeModuleMenu
    },
    data() {
      return {
        menuList: [
          {
            menuDesc: 'Base Setting',
            menuTitle: '基础设置',
            menuAction: '进入模块',
            menuLink: '',
            menuClass: 'home-list-setting'
          },
          {
            menuDesc: 'Customer Management',
            menuTitle: '客户管理',
            menuAction: '进入模块',
            menuLink: '',
            menuClass: 'home-list-crm'
          },
          {
            menuDesc: 'Goods Management',
            menuTitle: '商品管理',
            menuAction: '进入模块',
            menuLink: '',
            menuClass: 'home-list-goods'
          },
          {
            menuDesc: 'Order Management',
            menuTitle: '订单管理',
            menuAction: '进入模块',
            menuLink: '',
            menuClass: 'home-list-order'
          }
        ]
      };
    },
    props: {},
    computed: {},
    created() {
    },
    filters: {},
    methods: {}
  };
</script>

<style scoped>

</style>
