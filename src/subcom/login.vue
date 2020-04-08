  <template>
        <div>

            <div v-if="msg" class="hhh animated bounceInLeft " style="color:green;">
                <div id="selectBar">
                    <router-link to="/services/findmore/contentone"><div class="button buttonTo1">Product Design</div></router-link>
                    <router-link to="/services/findmore/contenttwo"><div class="button buttonTo2">FEA Simulation</div></router-link>
                    <router-link to="/services/findmore/contentthree"><div class="button buttonTo3">Prototyping</div></router-link>
                    <router-link to="/services/findmore/contentfour"><div class="button buttonTo4">Integrate & Testing</div></router-link>
                    <div class="clear"></div>
                </div>
                <router-view></router-view>
            </div> 
        </div>
    </template>
    
    
    
    <style lang="css" scoped>
        .hhh{overflow-y: scroll;color: aqua;font-size: 50px;width: 100vw;min-height: 100vh;background-color: #fff; z-index: 1000; position: absolute;}
        p{font-size: 50px;}
        #selectBar{box-shadow: 1px 4px 12px 1px #333;margin: 100px 0px 50px -252px;font-size: 12px;width: 504px;border-radius: 5px;position: relative;left: 50%;}
        .buttonTo1{border-left: 1px solid #aaaaaa;border-top:1px solid #aaaaaa;border-bottom:1px solid #aaaaaa;border-top-left-radius: 5px; border-bottom-left-radius: 5px;}
        .buttonTo2{border-left: 1px solid #aaaaaa;border-top:1px solid #aaaaaa;border-bottom:1px solid #aaaaaa;}
        .buttonTo3{border-left: 1px solid #aaaaaa;border-top:1px solid #aaaaaa;border-bottom:1px solid #aaaaaa;}
        .buttonTo4{border-left: 1px solid #aaaaaa;border-right: 1px solid #aaaaaa;border-top:1px solid #aaaaaa;border-bottom:1px solid #aaaaaa;border-top-right-radius: 5px; border-bottom-right-radius: 5px;}
        .button{float: left;padding:10px 18px;color: #333;}
        .clear{clear: both;}
        .router-link-active > .button{background:#333;color:#fff;}
        @media screen and (max-width: 680px){
            #selectBar{box-shadow: 1px 4px 12px 1px #333;
            margin: 100px 0px 50px -188px;
            font-size: 12px;
            width: 376px;
            border-radius: 5px;
            position: relative;
            left: 50%;}
            .button[data-v-53d445f4] {
            float: left;
            padding: 4px 2px;
            color: #333;
        }
        .router-link-active > .button{background:#333;color:#fff;}
        }
    </style>
    <script>
    
    export default {
        data () {
                return {
                    text: "login.vue",
                    msg:true
                }
            }
        }
    </script>