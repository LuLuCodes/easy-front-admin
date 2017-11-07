<template>
  <div class="home-content w1110 clearfix">
    <home-module-list></home-module-list>
    <operator-panle class="pull-right"></operator-panle>
  </div>
</template>

<script>
  import HomeModuleList from './HomeModuleList.vue';
  import OperatorPanle from './OperatorPanle.vue';
  export default {
    name: 'home-content',
    components: {
      HomeModuleList,
      OperatorPanle
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
