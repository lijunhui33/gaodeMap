import Vue from 'vue';
import Vuex from 'vuex';
import demoModules from '@/vuex/modules/demoModules';

Vue.use(Vuex);


const state = {
  demo: 'demoData',
  addressList: [
    // {
    //   label: '雅韶社区',
    //   value: '1',
    // },
    // {
    //   label: '八一村',
    //   value: '2',
    // },
    // {
    //   label: '八二村',
    //   value: '3',
    // },
    // {
    //   label: '平岚村',
    //   value: '4',
    // },
    // {
    //   label: '津浦村',
    //   value: '5',
    // },
    // {
    //   label: '雅韶村',
    //   value: '6',
    // },
    // {
    //   label: '五丰村',
    //   value: '7',

    // },
    // {
    //   label: '笏朝村',
    //   value: '8',
    // }
  ],
  userData: localStorage.getItem('userData'),
  userName: localStorage.getItem('userName'),
};

const getters = {
  demo: state => state.demo,
};

const mutations = {
  updateDemo (state, data) {
    // console.log('修改', data);
    state.demo = data;
  },
  updateAddressList (state, data) {
    state.addressList = data;
  },
  updateUserData (state, data) {
    localStorage.setItem('userData', data);
    state.userData = data;
  },
  deleteUserData (state) {
    localStorage.removeItem('userData');
    state.userData = '';
  },
  setUserName (state, data) {
    localStorage.setItem('userName', data);
    state.userName = data;
  }
};

export default new Vuex.Store({
  modules: {
    demoModules,
  },
  state,
  mutations,
  getters
});
