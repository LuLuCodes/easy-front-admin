<template>
  <Menu ref="sideBarMenu" :theme="menuTheme" :active-name="$route.name" width="auto">
    <template v-for="menu in routers">
      <MenuItem v-if="!menu.children.length" :name="menu.name" :key="menu.path">
        <e-icon :type="menu.icon" :size="iconSize"></e-icon>
        {{ menu.title }}
      </MenuItem>
  
      <Submenu v-if="menu.children.length" :name="menu.name" :key="menu.path">
        <template slot="title">
          <e-icon :type="menu.icon" :size="iconSize"></e-icon>
          {{ menu.title }}
        </template>
        <template v-for="child in menu.children">
          <MenuItem :name="child.name" :key="child.name">
            <e-icon :type="child.icon" :size="iconSize"></e-icon>
            {{ child.title }}
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
  import {mapState} from 'vuex';
  import EIcon from './EIcon.vue';
  
  export default {
    name: 'side-bar-menu',
    components: {
      EIcon
    },
    data() {
      return {};
    },
    props: {
      routers: {
        type: Array,
        default() {
          return {};
        }
      },
      iconSize: {
        type: Number,
        default: 20
      }
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
