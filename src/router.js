import Vue from 'vue'
import Router from 'vue-router'

import App from "./App.vue";
//引入自己定义的组件
// import Home from "./views/Home.vue";
// import Types from "./views/Types.vue";
// import CommonList from "./views/CommonList.vue";
// import Cart from "./views/Cart.vue";
// import UserCenter from "./views/UserCenter.vue";
// import Login from "./views/Login";
// import Register from "./views/Register";
// import Retrieve from "./views/Retrieve";

//使用懒加载方案，实现按需加载
const Home = r => require.ensure([], () => r(require('./views/Home.vue')), 'home');
const Types = r => require.ensure([], () => r(require('./views/Types.vue')), 'types');
const CommonList = r => require.ensure([], () => r(require('./views/CommonList')), 'commonlist');
const Cart = r => require.ensure([], () => r(require('./views/Cart.vue')), 'cart');
const UserCenter = r => require.ensure([], () => r(require('./views/UserCenter.vue')), 'usercenter');
const Login = r => require.ensure([], () => r(require('./views/user/Login')), 'login');
const Register = r => require.ensure([], () => r(require('./views/user/Register')), 'register');
const Retrieve = r => require.ensure([], () => r(require('./views/user/Retrieve')), 'retrieve');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: 'home',
          redirect: '/', //路径输入home的话从定向到根路经
        },
        {
          path: "/",
          name: 'name',
          component: Home
        },
        {
          path: '/types',
          name: 'types',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
          component: Types
        },
        {
          path: '/commonlist',
          name: 'commonlist',
          component: CommonList
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/usercenter',
          name: 'usercenter',
          component: UserCenter
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/retrieve',
          name: 'retrieve',
          component: Retrieve
        }
      ]
    }
  ]
})
