export default [
  { path: '/', component: () => import("../App.vue") },
  { path: '/compTest/router', component: () => import("../components/componentTest/router.vue") },
  { path: '/compTest/todo', component: () => import("../components/componentTest/Todo.vue")},
  { path: '/compTest/syntax', component: () => import("../components/componentTest/syntax.vue")}
]