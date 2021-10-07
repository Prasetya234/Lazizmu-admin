// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAm_nHluT4RxuHTautfo7bN_8MMkgpGLWA",
  authDomain: "uploadimagelazizmu.firebaseapp.com",
  projectId: "uploadimagelazizmu",
  storageBucket: "uploadimagelazizmu.appspot.com",
  messagingSenderId: "875602778747",
  appId: "1:875602778747:web:0fc2188293a389536a60de",
  measurementId: "G-1KF06JTCL0",
});

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
  data: {
    Chartist: Chartist,
  },
});
