    <template>
        <div class="app" style="color:black;">
            <!-- <login></login> -->
            <!-- <pagepiling></pagepiling> -->
            <router-view></router-view>
        </div>
    </template>
    
   
    <style lang="css"  type="text/css">
        .app{
            color: aqua !important;
            width: 50px;
        }
        #pp-nav{display: none !important;}
        img{width: 100%;height: 100%;}
    </style>
     <script>
    import login from "./subcom/login.vue";
    import pagepiling from "./subcom/pagepiling.vue";
    export default {
        data () {
                return {
                    text: "hello vue111"
                }
            },
            components:{
                // login,
                // pagepiling
            }
        }
    </script>