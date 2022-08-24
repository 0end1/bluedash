import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    openCustomer:false,
  },
  mutations: {
    setOpenCustomer(state, value){
      state.openCustomer = value
    }

  },
  getters: {
    openCustomer:state=>{
      return state.openCustomer
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
