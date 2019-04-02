import Vue from 'vue';
import Router from 'vue-router';

import docs from '../views/api/routes.js';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: '/home',
      component: () => import('../views/home/index.md')
    },

    {
      path: '/api',
      component: () => import('../views/api/index.vue'),
      children: docs.filter(route => 'path' in route)
    }
  ]
});
