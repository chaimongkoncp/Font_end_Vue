import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Home from './components/Home.vue';
import EditPage from './components/EditPage.vue';
import AddPage from './components/AddPage.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'add',
    path: '/add',
    component: AddPage
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditPage
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');