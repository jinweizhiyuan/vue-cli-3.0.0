export default [
  { path: '/', component: () => import("../App.vue") },
    { path: '/b', component: () => import("../components/componentTest/router2.vue") }
]