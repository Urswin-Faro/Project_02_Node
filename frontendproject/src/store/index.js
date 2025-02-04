import { createStore } from 'vuex'
/* eslint-disable */
export default createStore({
  state: {
    employees:null
  },
  getters: {
  },
  mutations: {
    setEmployees(state,payload){
      state.employees=payload
    }
  },
  actions: {
    async getEmploy({ commit }) {
      const {message} = await (await fetch('http://localhost:3030/employ')).json()
      commit('setEmployees',message)
  },
},
  modules: {
  }
})
