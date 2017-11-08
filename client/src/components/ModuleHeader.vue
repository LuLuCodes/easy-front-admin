<template>
  <header>
    <router-link :to="link" href="#" class="logo pull-left"><img src="../assets/images/logo-header.png" alt="">
    </router-link>
    <p class="pull-left">
      <span>{{title}}</span>
      <span>{{titleDesc}}</span>
    </p>
    <Button :style="{transform: 'rotateZ(' + (this.isHideMenuText ? '-90' : '0') + 'deg)'}" type="text"
            @click="toggleClick">
      <Icon type="navicon" size="32"></Icon>
    </Button>
    <header-right></header-right>
  </header>
</template>

<script>
  import BreadCrumb from './BreadCrumb.vue';
  import HeaderRight from './HeaderRight.vue';

  export default {
    name: 'module-header',
    components: {
      HeaderRight,
      BreadCrumb
    },
    data() {
      return {
        isHideMenuText: false
      };
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      titleDesc: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: '/'
      },
      hideMenuText: {
        type: Boolean,
        default: false
      }
    },
    computed: {},
    created() {
    },
    watch: {
      hideMenuText(show) {
        this.isHideMenuText = show;
      }
    },
    filters: {},
    methods: {
      toggleClick() {
        this.isHideMenuText = !this.isHideMenuText;
        this.$emit('hideMenu', this.isHideMenuText);
      }
    }
  };
</script>

<style scoped>

</style>
