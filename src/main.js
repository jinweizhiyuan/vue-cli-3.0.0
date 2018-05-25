import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router/index.js";

Vue.config.productionTip = false

Vue.use(VueRouter);

var router = new VueRouter({
    routes
})

new Vue({
    // template: '<div>hahaha</div>'
    // render: h => h(App)
    router: router
}).$mount('#app')