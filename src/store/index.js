import Vue from 'vue'
import Vuex from 'vuex'
import costCategories from './modules/costCategories'
import bills from './modules/bills'
import operations from './modules/operations'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    costCategories,
    bills,
    operations
  }
})