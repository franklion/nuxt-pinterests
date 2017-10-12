const types = {
  ADD_REGISTER: 'user/ADD_REGISTER',
  GET_REGISTER: 'user/GET_REGISTER',
  UPDATE_REGISTER: 'user/UPDATE_REGISTER',
}


const state = {
  uniformNo: null,
  password: null,
  rePassword: null,
}


const getters = {
  getUniformNo: state => state.uniformNo || null,
  getPassword: state => state.password || null,
  getRePassword: state => state.rePassword || null
}


const actions = {
  actionAddRegister({ commit }, { uniformNo, password, rePassword }) {

    return new Promise((resolve, reject) => {
    
      const myStorage = window.localStorage;
      myStorage.setItem('uniformNo', uniformNo)
      myStorage.setItem('password', password)
      myStorage.setItem('rePassword', rePassword)

      resolve('註冊成功!')
    })

  },
  actionGetRegister({ commit }) {
    return new Promise((resolve, reject) => {
      
      const myStorage = window.localStorage;
      const uniformNo =myStorage.getItem('uniformNo')
      const password = myStorage.getItem('password')
      const rePassword = myStorage.getItem('rePassword')
      commit(types.GET_REGISTER, {uniformNo, password, rePassword})  
      resolve('success')
    })
  },

  actionUpdateRegister({ commit }, { uniformNo }) {
    
    return new Promise((resolve, reject) => {
    
      const myStorage = window.localStorage;
      myStorage.setItem('uniformNo', uniformNo)

      resolve('更新成功!')
    })

  },

}


const mutations = {
  [types.GET_REGISTER](state, {uniformNo, password, rePassword}) {
    state.uniformNo = parseInt(uniformNo)
    state.password = password
    state.rePassword = rePassword
  },
}


export default {
  state,
  getters,
  actions,
  mutations
}
