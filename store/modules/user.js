const types = {
  GET_USERINFO: 'user/GET_USERINFO',
  EMPTY_USERINFO: 'user/EMPTY_USERINFO',
  SET_USERINFO: 'user/SET_USERINFO'
}


const state = {
  name: null
}


const getters = {
  getName: state => state.name
}


const actions = {
  actionGetUserInfo ({ commit }) {

    // commit(types.EMPTY_USERINFO);

    fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(response =>
      response.json())
    .then((obj) => {
      commit(types.GET_USERINFO, obj.name);
    })
    .catch((err) => {})  

  },
  actionSetUserInfo ({ commit }, name) {
    commit(types.SET_USERINFO, name)
  },
}


const mutations = {
  [types.GET_USERINFO] (state, name) {
    state.name = name
  },
  [types.EMPTY_USERINFO] (state) {
    state.name = null
  },
  [types.SET_USERINFO] (state, name) {
    state.name = name
  },
}


export default {
  state,
  getters,
  actions,
  mutations
}