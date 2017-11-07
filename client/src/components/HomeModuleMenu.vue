<template>
  <router-link :to="menuLink" :class="menuClass">
    <span class="home-list-icon"></span>
    <div class="home-list-enter">
      <div class="home-list-title">
        <h3 class="gray-text">{{menuDesc}}</h3>
        <h4>{{menuTitle}}</h4>
      </div>
      <p class="home-list-hover"><span>{{menuAction}}</span> <Icon type="ios-arrow-right"></Icon></p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'home-module-menu',
    components: {},
    data() {
      return {};
    },
    props: {
      menuDesc: {
        type: String,
        default: ''
      },
      menuTitle: {
        type: String,
        default: ''
      },
      menuAction: {
        type: String,
        default: '进入模块'
      },
      menuLink: {
        type: String,
        default: ''
      },
      menuClass: {
        type: String,
        default: ''
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