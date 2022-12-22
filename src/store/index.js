import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  getters: {
    getUsersData(state){
      return state.users;
    }
  },
  mutations: {
    setUsers(state, data){
      state.users=data;
    },
    addUser(state, user){
      state.users.push(user)
    }
  },
  actions: {
    getUsers: async function({commit}){
      const res = await axios("https://639f2d1e5eb8889197f64888.mockapi.io/forms");
      const result=res.data
      commit('setUsers',result)
    },
    postUsers : async function({commit},user){
      const res = await  axios.post("https://639f2d1e5eb8889197f64888.mockapi.io/forms",{...user})
      console.log(res.data)
      commit('addUser',res.data) 
    }
  },
  modules: {
  }
})
