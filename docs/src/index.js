import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BlockDemo from './components/BlockDemo.vue';
import 'highlight.js/styles/xcode.css';

import {install} from '../../lib';

spritejs.use(install);

Vue.config.productionTip = false;

Vue.component('block-demo', BlockDemo);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
