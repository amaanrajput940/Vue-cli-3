import Vue from 'vue'
import App from './App.vue'
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
Vue.config.productionTip = false

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes: routes
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
// Now the app has started!
