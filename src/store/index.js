import Vue from 'vue'
import Vuex from 'vuex'
import costCategories from './modules/costCategories'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    costCategories
  }
})