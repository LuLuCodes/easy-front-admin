<template>
  <div class="page">
    <module-header title="基础设置" title-desc="Base Setting" :hide-menu-text="hideMenuText" @hideMenu="hideMenu"></module-header>
    <div class="nav-wrap" :style="{width: hideMenuText?'60px':'200px', overflow: hideMenuText ? 'visible' : 'auto', background: menuTheme === 'dark' ? '#495060' : 'white'}">
      <side-bar-menu v-if="!hideMenuText" :routers="routers" :iconSize="20"></side-bar-menu>
      <side-bar-menu-shrink v-else :routers="routers" :iconSize="20"></side-bar-menu-shrink>
    </div>
    
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import ModuleHeader from '../../components/ModuleHeader.vue';
  import SideBarMenu from '../../components/SideBarMenu.vue';
  import SideBarMenuShrink from '../../components/SideBarMenuShrink.vue';
  export default {
    name: '',
    components: {
      ModuleHeader,
      SideBarMenu,
      SideBarMenuShrink
    },
    data() {
      return {
        hideMenuText: false
      };
    },
    props: {},
    computed: {
      ...mapState({
        routers: state => state.gobal.routers.BaseSetting[0],
        menuTheme: state => state.gobal.menuTheme
      })
    },
    created() {
    },
    filters: {},
    methods: {
      hideMenu(show) {
        this.hideMenuText = show;
      }
    }
  };
</script>

<style scoped>

</style>
