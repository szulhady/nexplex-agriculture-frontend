import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2078a3b6 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _528e8972 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _46bd18e4 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _25a52106 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _4a16906f = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _6a49908b = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _62f5229b = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _bc493c6e = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _6d55ee84 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _b0e4d714 = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _06552144 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _061fe63e = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _0603b73c = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _3f428cee = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _55d183ce = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _54e7bcfc = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _8f6579bc = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _8f494aba = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _d305284c = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _33a8a206 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _00a534b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminStatus",
    component: _2078a3b6,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _528e8972,
    name: "control"
  }, {
    path: "/current",
    component: _46bd18e4,
    name: "current"
  }, {
    path: "/general",
    component: _25a52106,
    name: "general"
  }, {
    path: "/inspire",
    component: _4a16906f,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _6a49908b,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _62f5229b,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _bc493c6e,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _6d55ee84,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _b0e4d714,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _06552144,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _061fe63e,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _0603b73c,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _3f428cee,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _55d183ce,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _54e7bcfc,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _8f6579bc,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _8f494aba,
    name: "trendsIpah2"
  }, {
    path: "/trendsTkpmPagoh",
    component: _d305284c,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _33a8a206,
    name: "user"
  }, {
    path: "/",
    component: _00a534b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
