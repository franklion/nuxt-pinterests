import Vuex from 'vuex';

// root
import * as getters from './getters.js';
import {
  state,
  actions,
  mutations
} from './root.js';


// modules
import count from './modules/count';
import user from './modules/user';
import register from './modules/register';
import openData from './modules/openData';

const createStore = () => {
  return new Vuex.Store({
    // root
    state,
    actions,
    mutations,
    getters,
    // 將整理好的 modules 放到 vuex 中組合
    modules: {
      count,
      user,
      register,
      openData
    },
    // 嚴格模式，禁止直接修改 state
    strict: true
  })
}

export default createStore
