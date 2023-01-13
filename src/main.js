import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './vuex/index';
import isDisable from './utils/directive';
Vue.config.productionTip = false;
Vue.use(isDisable);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
