<template>
  <div class="home">
    <main-header></main-header>
    <home-content></home-content>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainHeader from '../components/MainHeader.vue';
  import HomeContent from '../components/HomeContent.vue';
  import MainFooter from '../components/MainFooter.vue';
  export default {
    name: 'home-page',
    components: {
      MainHeader,
      HomeContent,
      MainFooter
    },
    data() {
      return {};
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
