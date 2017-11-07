<template>
  <header>
    <div class="w1110">
      <router-link :to="link" class="logo"><img src="../assets/images/logo.png" alt=""></router-link>
      <header-right></header-right>
    </div>
  </header>
</template>

<script>
  import HeaderRight from './HeaderRight.vue';

  export default {
    name: 'main-header',
    components: {
      HeaderRight
    },
    data() {
      return {};
    },
    props: {
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