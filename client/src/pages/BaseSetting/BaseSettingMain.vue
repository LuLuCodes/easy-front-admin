<template>
  <div class="page">
    <module-header title="基础设置" title-desc="Base Setting" :hide-menu-text="hideMenuText" @hideMenu="hideMenu"></module-header>
    <side-bar-menu :routers="routers" :iconSize="14" :hide-menu-text="hideMenuText"></side-bar-menu>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import ModuleHeader from '../../components/ModuleHeader.vue';
  import SideBarMenu from '../../components/SideBarMenu.vue';
  export default {
    name: '',
    components: {
      ModuleHeader,
      SideBarMenu
    },
    data() {
      return {
        hideMenuText: false
      };
    },
    props: {},
    computed: {
      ...mapState({
        routers: state => state.gobal.routers.BaseSetting[0]
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
