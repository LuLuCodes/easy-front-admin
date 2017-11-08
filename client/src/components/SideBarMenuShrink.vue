<template>
  <div>
    <template v-for="(menu, index) in routers">
      <Dropdown transfer v-if="menu.children.length !== 1" placement="right-start" :key="index">
        <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
          <i class="icon" :class="menu.icon" :key="menu.path" :style="{fontSize: iconSize + 'px', color: iconColor}"></i>
        </Button>
        <DropdownMenu style="width: 200px;" slot="list">
          <template v-for="(child, i) in menu.children">
            <DropdownItem :name="child.name" :key="i">
              <i class="icon" :class="menu.icon" :key="menu.path" :style="{fontSize: iconSize + 'px', color: iconColor}"></i>
              {{ menu.title }}
            </DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>
      <Dropdown transfer v-else placement="right-start" :key="index">
        <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
          <i class="icon" :class="menu.icon" :key="menu.path" :style="{fontSize: iconSize + 'px', color: iconColor}"></i>
        </Button>
        <DropdownMenu style="width: 200px;" slot="list">
          <DropdownItem :name="menu.name" :key="'d' + index">
            <i class="icon" :class="menu.icon" :key="menu.path" :style="{fontSize: iconSize + 'px', color: iconColor}"></i>
            {{ menu.title }}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'side-bar-menu-shrink',
    components: {},
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
      iconSize: Number
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
