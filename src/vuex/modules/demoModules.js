const demoModules = {
  state: {
    demoModulesData: 'demoModules'
  },
  mutations: {
    updatedDemoModulesData (state, data) {
      state.demoModulesData = data;
    },

  },
  getters: {
    getDemoModulesData: state => state.demoModulesData,
  }
};

export default demoModules;
