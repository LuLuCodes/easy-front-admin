<template>
  <header>
    <router-link :to="link" href="#" class="logo pull-left"><img src="../assets/images/logo-header.png" alt=""></router-link>
    <p class="pull-left">
      <span>{{title}}</span>
      <span>{{titleDesc}}</span>
    </p>
    <header-right></header-right>
  </header>
</template>

<script>
  import HeaderRight from './HeaderRight.vue';
  export default {
    name: 'module-header',
    components: {
      HeaderRight
    },
    data() {
      return {};
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
      }
    },
    computed: {},
    created() {
    },
    filters: {},
    methods: {}
  };
</script>

<style scoped>

</style>
