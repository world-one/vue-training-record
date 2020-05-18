import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/record/list',
      name: 'record-list',
      component: () => import('./views/RecordList.vue'),
    },
    {
      path: '/record/:day/:exercise',
      name: 'record',
      component: () => import('./views/Record.vue'),
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue'),
    },
  ],
});
