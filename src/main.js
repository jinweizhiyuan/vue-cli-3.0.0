import Vue from 'vue'
import router from "./router/index.js";

Vue.config.productionTip = false

new Vue({
    // template: '<div>hahaha</div>'
    // render: h => h(App)
    router: router
}).$mount('#app')