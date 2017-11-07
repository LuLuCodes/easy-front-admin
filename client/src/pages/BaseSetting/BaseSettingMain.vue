<template>
  <div class="page">
    <module-header title="基础设置" title-desc="Base Setting"></module-header>
    <side-bar-menu></side-bar-menu>
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
      return {};
    },
    props: {},
    computed: {
      ...mapState({
        routers: state => state.gobal.routers.BaseSetting
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
