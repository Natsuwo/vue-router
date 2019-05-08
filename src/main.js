import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start()
  }
  next()
});

router.beforeEach((to, from, next) => {
  console.log('Global route guards');
  next();
});

router.afterEach(() => {
  NProgress.done();
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
