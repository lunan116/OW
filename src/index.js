    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import App from './App.vue';
    import router from './router';
    //import login from "./subcom/login.vue";
    import animated from 'animate.css';
    Vue.use(animated)
    
   
    Vue.use(VueRouter);
    const root = document.createElement('div');
    document.body.appendChild(root);
    
    new Vue({
        render : (h) => h(App),
        router
    }).$mount(root)