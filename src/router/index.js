import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
});

export default router;
