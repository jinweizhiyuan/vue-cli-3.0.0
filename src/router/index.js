import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        { path: '/', component: () =>
                import ("../App.vue") },
        { path: '/compTest/router', component: () =>
                import ("../components/componentTest/router.vue") },
        { path: '/compTest/todo', component: () =>
                import ("../components/componentTest/Todo.vue") },
        { path: '/compTest/syntax', component: () =>
                import ("../components/componentTest/syntax.vue") }
    ]
})

export default router