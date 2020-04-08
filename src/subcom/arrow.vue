  <template>
        <div>
            <div class="animate-bounce-up" @click="goNext">
                <img :src="arrow" alt="">
            </div>
            <!-- <div class="animate-bounce-down"></div> -->
        </div>
    </template>
    
    
    
    <style lang="css" scoped>
        @-webkit-keyframes bounce-down {
         25% {-webkit-transform: translateY(-10px);}
         50%, 100% {-webkit-transform: translateY(0);}
         75% {-webkit-transform: translateY(10px);}
        }

        @keyframes bounce-down {
         25% {transform: translateY(-10px);}
         50%, 100% {transform: translateY(0);}
         75% {transform: translateY(10px);}
        }

        .animate-bounce-down{ background:#333; width: 100px; height: 100px; margin:100px auto;-webkit-animation: bounce-down 1.5s linear infinite;animation: bounce-down 1.5s linear infinite;
        }

        @-webkit-keyframes bounce-up {
         25% {-webkit-transform: translateY(10px);}
         50%, 100% {-webkit-transform: translateY(0);}
         75% {-webkit-transform: translateY(-10px);}
        }

        @keyframes bounce-up {
         25% {transform: translateY(10px);}
         50%, 100% {transform: translateY(0);}
         75% {transform: translateY(-10px);}
        }

        .animate-bounce-up{position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 85%;cursor: pointer; width: 50px; height: 50px;margin-top: 48px;-webkit-animation: bounce-up 1.4s linear infinite;animation: bounce-up 1.4s linear infinite;}
        .animate-bounce-up img{width:100%;height: 100%;}
    </style>
    <script>
    import arrow from '../img/arrow.png'
    export default {
        data () {
                return {
                    arrow
                }
            },
        methods:{
            goNext(){
                //console.log("ogoerih")
                $.fn.pagepiling.moveSectionDown();
            }
        }
        }
    </script>