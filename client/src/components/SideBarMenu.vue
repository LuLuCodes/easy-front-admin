<template>
  <Menu ref="sideBarMenu" :theme="menuTheme" :active-name="$route.name">
    <template v-for="menu in routers">
      <MenuItem v-if="menu.children.length <= 1" :name="menu.name" :key="menu.path">
        <i class="icon" :class="menu.icon" :key="menu.path" :style="{fontSize: iconSize + 'px'}"></i>
        {{ menu.title }}
      </MenuItem>
    </template>
  </Menu>
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
      routers: {
        type: Object,
        default() {
          return {};
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
