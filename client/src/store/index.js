import Vue from 'vue';
import Vuex from 'vuex';
import gobal from './gobal';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    gobal
  }
});

export default store;