
// 1. Define route components.
// These can be imported from other files

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.

import HelloWorld from './components/HelloWorld.vue'
import Blog from './views/Blog.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/blog', component: Blog },
  { path: '/about', component: About }
];

export default routes;
