import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Event from '../views/Event.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Home
  },
  {
    path: '/tour/:id',
    name: 'Tour-child',
    component: Event
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: Home
  },
  {
    path: '/cinema',
    name: 'Ciname',
    component: Home
  },
  {
    path: '/theatre',
    name: 'Theatre',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '*',
    component: About,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
