// 导入 Vue 解析模块
import Vue from 'vue';
// 1.先导入路由模块
import VueRouter from 'vue-router'
// 2.安装 和使用路由模块
Vue.use(VueRouter)

// 3.导入父组件


// 导入子组件
import login from "./subcom/login.vue";
import pagepiling from "./subcom/pagepiling.vue";
import contentone from "./subcom/contentone.vue";
import contenttwo from "./subcom/contenttwo.vue";
import contentthree from "./subcom/contentthree.vue";
import contentfour from "./subcom/contentfour.vue";


// 4.创建路由模块
const router = new VueRouter({
    routes:[
        //redirect 设置默认显示的组件
        //{ path: '/', redirect: '/src/comp/regist' },
        //{path: '/',component: HelloWorld},
        {path:'/',component:pagepiling,
        children:[
            {
                path:'/services/findmore',
                component:login,
                redirect: '/services/findmore/contentone',
                children:[
                    {
                        path:'/services/findmore/contentone',
                        component:contentone
                    },{
                        path:'/services/findmore/contenttwo',
                        component:contenttwo
                    },{
                        path:'/services/findmore/contentthree',
                        component:contentthree
                    },{
                        path:'/services/findmore/contentfour',
                        component:contentfour
                    }
                ]
            }
        ]}
        // ,
        // {path:'/services/findmore',
        // component:login
        // }
        
    ]
})
//暴露路由对象
export default router;