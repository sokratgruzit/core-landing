import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: null,
    navMenu: items.navigation,
    community: items.community,
    faq: items.faq,
    communityNum: 0,
    statistic: items.statistic,
    start: false,
    tabs: items.framework,
    success: false,
    cases: items.cases,
    techTabs: items.technology
  },
  getters: {
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setCommunity (state, num) {
      state.communityNum = num
    },
    setStart (state, test) {
      state.start = test
    },
    setSuccess (state, success) {
      state.success = success
    }
  },
  actions: {
  },
  modules: {
  }
})
