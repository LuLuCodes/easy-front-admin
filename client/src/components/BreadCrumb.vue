<template>
  <Breadcrumb>
    <BreadcrumbItem
      v-for="item in currentPath"
      :href="item.path"
      :key="item.name"
    >{{item.name}}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'bread-crumb',
    components: {},
    data() {
      return {
        currentPath: [
          {
            name: '首页',
            path: ''
          },
          {
            name: '订单',
            path: ''
          }
        ]
      };
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