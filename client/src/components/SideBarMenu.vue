<template>
  <div class="nav-wrap">
    <Menu ref="sideBarMenu" :theme="menuTheme" :active-name="$route.name">
      <template v-for="menu in menuList.children">
        <MenuItem v-if="menu.children.length <= 1" :name="menu.name" :key="menu.path">
          <Icon :type="menu.icon" :size="iconSize" :key="menu.path"></Icon>
          {{ menu.title }}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  
  export default {
    name: 'side-bar-menu',
    components: {},
    data() {
      return {};
    },
    props: {
      menuList: {
        type: Array,
        default() {
          return [];
        }
      },
      iconSize: Number
    },
    computed: {
      ...mapState({
        menuTheme: state => state.gobal.menuTheme
      })
    },
    created() {
    },
    filters: {},
    methods: {}
  };
</script>

<style scoped>

</style>
