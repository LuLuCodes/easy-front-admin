<template>
  <i :class="[baseClass, type]" :style="{fontSize: size + 'px', color}"></i>
</template>

<script>
  export default {
    name: 'ef-icon',
    components: {},
    data() {
      return {};
    },
    props: {
      size: {
        type: Number,
        default: 20
      },
      type: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      }
    },
    computed: {
      baseClass() {
        return this.type.indexOf('ivu-icon') !== -1 ? 'ivu-icon' : 'icon';
      }
    },
    created() {
    },
    filters: {},
    methods: {}
  };
</script>

<style scoped>

</style>