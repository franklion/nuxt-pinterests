import Vuex from 'vuex';

// modules
import count from './modules/count';
import user from './modules/user';

const createStore = () => {
  return new Vuex.Store({
    // 將整理好的 modules 放到 vuex 中組合
  modules: {
    count,
    user
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
  })
}

export default createStore