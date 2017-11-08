<template>
  <div>
    <template v-for="(menu, index) in routers">
      <Dropdown transfer v-if="menu.children.length" placement="right-start" :key="index">
        <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
          <e-icon :type="menu.icon" :size="iconSize" :color="iconColor"></e-icon>
        </Button>
        <DropdownMenu style="width: 200px;" slot="list">
          <template v-for="(child, i) in menu.children">
            <DropdownItem :name="child.name" :key="i">
              <e-icon :type="child.icon" :size="iconSize"></e-icon>
              {{ child.title }}
            </DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>
      <Dropdown transfer v-else placement="right-start" :key="index">
        <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
          <e-icon :type="menu.icon" :size="iconSize" :color="iconColor"></e-icon>
        </Button>
        <DropdownMenu style="width: 200px;" slot="list">
          <DropdownItem :name="menu.name" :key="'d' + index">
            <e-icon :type="menu.icon" :size="iconSize"></e-icon>
            <span style="padding-left: 2px;">{{ menu.title }}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import EIcon from './EIcon.vue';
  
  export default {
    name: 'side-bar-menu-shrink',
    components: {
      EIcon
    },
    data() {
      return {};
    },
    props: {
      routers: {
        type: Object,
        default() {
          return {};
        }
      },
      iconSize: {
        type: Number,
        default: 14
      }
    },
    computed: {
      ...mapState({
        menuTheme: state => state.gobal.menuTheme
      }),
      iconColor() {
        return this.menuTheme === 'dark' ? 'white' : '#495060';
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
