import axiox from 'axios'

// root types
import * as rootypes from '../mutations_types.js';

const types = {
  OPEN_1999: 'environment/OPEN_1999',
  OPENDATA_SEARCH_KEYWORD: 'environment/OPENDATA_SEARCH_KEYWORD',
}


const state = {
  openData: [],
  search: {
    region: 'all',
    keyword: ''
  }
}


const getters = {
  getOpenData: state => {
    let _openData = state.openData;

    if(state.search.keyword !== '') {
      _openData = _openData.filter( item => { 
        return JSON.stringify(item).indexOf( state.search.keyword ) != -1 
      })
    }


    return _openData
  
  },
}


const actions = {
  actionGetOpenData({ commit }) {
    // 啟動 loading
    commit(rootypes.LOADING, true);

    return new Promise((resolve, reject) => {
    
      axiox.get('http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery')
      .then(response => {

        commit(types.OPEN_1999, response.data)

        // 關閉 loading
        commit(rootypes.LOADING, false);
      })
      .catch(err => {
        console.log(err)
      })  
    })
  },

  actionSearchKeywordOfOpenData({ commit }, keyword) {
    commit(types.OPENDATA_SEARCH_KEYWORD, keyword);
  }
}


const mutations = {
  [types.OPEN_1999](state, openData) {
    state.openData = openData
  },
  [types.OPENDATA_SEARCH_KEYWORD](state, keyword) {
    state.search.keyword = keyword;
  },
}


export default {
  state,
  getters,
  actions,
  mutations
}
