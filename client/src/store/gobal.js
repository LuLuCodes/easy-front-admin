import BaseSetting from '../router/base-setting';

const gobal = {
  namespaced: true,
  state: {
    routers: {
      BaseSetting
    },
    menuTheme: 'dark',
    openedSubmenuArr: []  // 要展开的菜单数组
  },
  mutations: {
    addOpenSubmenu(state, name) {
      let hasThisName = false;
      let isEmpty = false;
      if (name.length === 0) {
        isEmpty = true;
      }
      if (state.openedSubmenuArr.indexOf(name) > -1) {
        hasThisName = true;
      }
      if (!hasThisName && !isEmpty) {
        state.openedSubmenuArr.push(name);
      }
    },
    clearOpenedSubmenu(state) {
      state.openedSubmenuArr.length = 0;
    }
  },
  actions: {},
  getters: {}
};

export default gobal;