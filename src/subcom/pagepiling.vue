  <template>
        <div>
            <div id="dowebok">
                <div class="section" id="section1" :style="'background: url('+bg1+') 50% no-repeat;background-size:auto 100%;'">
                    <!-- <h3>第一屏</h3> -->
                    <div class="content_show">
                        <p>{{content1}}</p>
                        <p>{{content2}}</p>
                        <p>{{content3}}</p>
                    </div>
                    <arrow></arrow>
                </div>
                <div class="section" id="section2" :style="'background: url('+bg2+') 50% no-repeat;background-size:auto 150%;'">
                    <div class="page2_content">
                        <p>{{content4}}</p>
                        <router-link to="/services/findMore">
                            <div class="knowMore">
                                FIND OUT MORE
                            </div>
                        </router-link>
                        
                    </div>
                    <arrow></arrow>
                </div>
                <div class="section" id="section3" :style="'background: url('+bg3+') 50% no-repeat;background-size:auto 150%;'">
                    <div class="page3_content">
                        <h3>Hey.</h3>
                        <p>What can we help you with?</p>
                        <div class="sendEmail" @click="sendEmail($event)">
                            send us an email
                        </div>
                    </div>
                    <arrow></arrow>
                </div>
                <div class="section" id="section4">
                    
                    <div class="pagefour_content">
                        <h3>Magnetic Material Brochures & White Papers</h3>
                        <div class="pageFour_content1">
                            <a :href="baseUrl+pageHref[i]" target="_blank" v-for="(item,i) in pageListimg" :key="item.id">
                                <div class="pageFour_contentBox"  >
                                    <div style="width: 100%;height: 100%;">
                                        <img :src="item" alt="">
                                    </div>
                                    <div class="box_shadow">
                                        <h5>{{contentname[i]}}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <h6>Lab Magnetics possesses the latest and most advanced technology and an engineering staff experienced in all magnetic approaches and disciplines. We incorporate elements of Lab Magnetics’ unique information to ensure it adds value to your search. </h6>
                        <h4>© 2020 Lab Magnetics, a Quadrant company</h4>
                        <!-- <div class="txt" ref="viewBox">
                            <p>如果某一屏的内容较多，需要用到滚动条，为了让用户在该区域滚动以查看更多内容，可以设置 normalScrollElements 参数，并赋值该元素的选择器。</p>
                            <p>不过好像有个小问题：当滚动到本屏的时候，必须要在指定的区域内滚动一次，才能再进行滚屏，否则无法滚动。</p>
                            <p>1</p>
                            <p>22</p>
                            <p>333</p>
                            <p>4444</p>
                            <p>55555</p>
                            <p>666666</p>
                            <p>7777777</p>
                            <p>88888888</p>
                            <p>999999999</p>
                            <p>0000000000</p>
                            <p>999999999</p>
                            <p>88888888</p>
                            <p>7777777</p>
                            <p>666666</p>
                            <p>55555</p>
                            <p>4444</p>
                            <p>333</p>
                            <p>22</p>
                            <p>1</p>
                        </div> -->
                    </div>
                    
                </div>
            </div>
            <router-view></router-view>
            <div class="header">
                <img id="logo" :src="logo">
                <ul id="menu">
                    <li data-menuanchor="company" class="active"><a  @click.prevent = "custormAnchor(1)">Company</a></li>
                    <li data-menuanchor="services"><a @click.prevent = "custormAnchor(2)">Services</a></li>
                    <li data-menuanchor="contact"><a @click.prevent = "custormAnchor(3)">Contact</a></li>
                    <li data-menuanchor="resources"><a @click.prevent = "custormAnchor(4)">Resources</a></li>
                </ul>
            </div>
            <div class="mobile_header">
                <div class="mobiletop1">
                    <div class="mobiletop">
                        <img :src="logo" class="logoImg">
                        <img :src="hButton" class="hButton">
                    </div>
                </div>
                <div class="modal">
                    <div class="dialog"></div>
                    <div class="dialog1">
                        <img :src="logo">
                        <ul id="mobile_menu">
                            <a @click.prevent = "custormAnchor(1)"><li data-menuanchor="company" class="active">Company</li></a>
                            <a @click.prevent = "custormAnchor(2)"><li data-menuanchor="services">Services</li></a>
                            <a @click.prevent = "custormAnchor(3)"><li data-menuanchor="contact">Contact</li></a>
                            <a @click.prevent = "custormAnchor(4)"><li data-menuanchor="resources">Resources</li></a>
                        </ul>
                    </div>
                    <div style="clear: both;"></div>
                </div>
	        </div>
            

        </div>
    </template>
    
    <style lang="css" scoped>
        /* @import "../css/test.css"; */
        /* 取消router-link的下划线 */
        a {text-decoration: none;}
        .router-link-active {text-decoration: none;}
        .section { text-align: center; font: 0px "Microsoft Yahei"; color: #fff;}
        #menu { position: fixed; right: 50px; top: 0; z-index: 10; margin: 0; padding: 0; font-size: 0; list-style-type: none;}
        #menu li {cursor: pointer; line-height:66px;display: inline-block; font: 14px "Microsoft Yahei";font-weight: bold;color: #fff !important;}
        #menu li:hover{animation: uk-text-shadow-glitch .65s cubic-bezier(1,-1.91,0,2.79) 0s infinite normal both running;font-weight: bold;}
        #menu a { display: inline-block;line-height: 66px;padding:0 30px; color: #fff; text-decoration: none;  }
        #menu .active a { color: #DAA520; background-color: #000; background-color: rgba(0, 0, 0, .5);}
        #logo{margin-top: 10px;width: 250px !important;height: 47.44px !important;position:fixed;left: 50px;z-index: 100;}
        .content_show{overflow-y: scroll;height: 40vh;width: 60vw;text-align: left;max-height: 250px;margin-top: 50vh;margin-left: 10vw;padding:5px 8px;}
        .content_show > p{font-size: 14px;color: #e8f4ff !important;text-indent: 20px;}
        .content_show::-webkit-scrollbar {width: 10px;height: 1px;}
        .content_show::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);background: rgba(0,0,0,0.5);}
        .content_show::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);border-radius: 10px;background: rgba(255, 255, 245, .3);}
        .txt {width: 100%;height: 100%;margin: 0 auto;font: 16px/30px "Microsoft Yahei";text-align: left;overflow: auto;}
        .page2_content > p{font-size: 20px;color: #000 !important;text-align: left;text-indent: 30px;width: 80vw;margin: 0 auto;}
        .knowMore{font-weight:bold;font-size: 22px;padding:20px 40px;background: rgba(255,255,255,.7);;color: #000;width:250px;margin: 20px auto;cursor: pointer;border:3px solid #fff;}
        .page3_content > p{font-size: 28px;color: #DAA520 !important;text-align: center;width: 80vw;margin: 0 auto;}
        .page3_content > h3{font-size: 70px;color: #DAA520 !important;text-align: center;text-indent: 30px;width: 80vw;margin: 0 auto;}
        .sendEmail{font-weight:bold;font-size: 20px;padding:20px 40px;background:rgba(0, 0, 0, .5) ;color: #fff;width:250px;margin: 20px auto;cursor: pointer;}
        .sendEmail:hover{background:rgba(255,255,255,.8);color: #000;}
        .knowMore:hover{background:rgba(0, 0, 0, .2);color: #fff;border:3px solid #fff;}
        .pagefour_content{width: 100%;height: 100%;margin: 0 auto;font: "Microsoft Yahei";text-align: left;overflow: auto;}
        .pagefour_content > h3{font-size: 22px !important;margin-top: 66px;text-align: center;margin-bottom: 0px;padding: 20px 0;background-color: black;}
        .pagefour_content > h4{font-size: 16px !important;margin-top: 0px;text-align: center;margin-bottom: 0px;padding: 20px 0;background-color: black;}
        .pagefour_content > h6{font-size: 14px !important;margin-top: 0px;text-align: center;margin-bottom: 0px;padding: 20px 0;background-color: #00c0ff;margin:auto 10%;}
        #section4 .pp-tableCell {display: table-cell;vertical-align: top !important;}
        .pageFour_contentBox{width: 25%;float: left;cursor: pointer;overflow: hidden;position:relative;}
        .pageFour_contentBox img{width: 100%;height: 100%;}
        .pageFour_content1{overflow: hidden;}
        .box_shadow{width: 100%;height: 100%;position: absolute;left: 0;top: 0px;background-color: rgb(0,192,255);opacity: 0;}
        .box_shadow h5{font-size: 42px;color: #fff;z-index: 1000;position: absolute;text-align: center;width: 100%;margin: 0;top: 50%;transform: translateY(-50%);}
        /* 页面背景 */
        /* #section1 { background: url(../img/bg1.png) 50% no-repeat;background-size:auto 100%;}
        #section2 { background: url(../img/bg2.png) 50% no-repeat;background-size:auto 150%;}
        #section3 { background: url(../img/bg3.png) 50% no-repeat;background-size:auto 150%;} */
        /* 抖音字体特效 */
        .doudong{animation: uk-text-shadow-glitch .65s cubic-bezier(1,-1.91,0,2.79) 0s infinite normal both running;}
        @keyframes uk-text-shadow-glitch {
                0% {
                    text-shadow: none
                }
                25% {
                    text-shadow: -2px -2px 0 #ff0048,2px 2px 0 #3234ff
                }
                50% {
                    text-shadow: 2px -2px 0 #ff0048,-2px 2px 0 #3234ff
                }
                75% {
                    text-shadow: -2px 2px 0 #ff0048,2px -2px 0 #3234ff
                }
                100% {
                    text-shadow: 2px 2px 0 #ff0048,-2px -2px 0 #3234ff
                }
            }
        @keyframes uk-flicker {
                0% {
                    opacity: 0
                }
                10% {
                    opacity: .6;
                    transform: scale(.8)
                }
                20% {
                    opacity: 0
                }
                40% {
                    opacity: 1
                }
                50% {
                    opacity: .2;
                    transform: scale(1.1)
                }
                100% {
                    opacity: 1;
                    transform: scale(1)
                }
            }
        .hero__chevron-south {
            display: inline-block;
            width: 1.625rem;
            height: .875rem;
            position: absolute;
            left: 50%;
            margin-left: -.8125rem;
            bottom: 3.125rem;
            z-index: 2;
            background: transparent url(../img/logo.png) no-repeat center center;
            border: none;
            outline-style: none;
            -webkit-animation-name: hvr-wobble-vertical;
            -moz-animation-name: hvr-wobble-vertical;
            animation-name: hvr-wobble-vertical;
            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-timing-function: ease-in-out;
            -moz-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            color: #fff;
        }
        * {touch-action: pan-y;}
        .header{display: block;width: 100%;height: 66px;position: fixed;top: 0px;z-index: 1000;background-color:rgba(0,0,0,0.6);}
        .mobile_header{display:none;}
        @media screen and (max-width: 1200px){
            .pageFour_contentBox{width: 50%;}
        }
        /* .modal{display:none;} */
        @media screen and (max-width: 950px){
            .header{display: none;}
            .mobile_header{display: block;width: 100%;height: 66px;position: fixed;top: 0px;z-index: 1000;}
            #mobile_menu{padding-left: 0px;}
            .hButton{width: 8vw;height:auto;max-width: 40px;min-width: 36px;position: absolute;top: 14px;left: 15px;cursor: pointer;}
            .logoImg{width: 220px;height: auto;}
            .mobiletop1{width: 100%;height: 66px;color: #fff;overflow: hidden;text-align: center;background-color: black;opacity: 0.6; z-index: 1;}
            .mobiletop{width: 100%;height: 60px;color: #fff;overflow: hidden;text-align: center;padding-top: 10px;}
            .dialog{float: right;width: 30%;height: 100vh;margin-top: -66px;overflow: hidden;background-color: black;position: absolute;opacity: 0.6 !important;z-index: 1000 !important;left: -30%;}
            .dialog1{float: left;width: 70%;height: 100vh;background-color: #fff;opacity: 1;margin-top: -66px;overflow: hidden;position: absolute;left: -70%; }
            .dialog1 img{margin: 20px auto;display: block;width:240px;height: auto;}
            .dialog1 li{padding:12px 60px;height: 48px;line-height: 48px;font-size: 16px;color: #303133;list-style: none;cursor: pointer;font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight: bold;}
            .dialog1 a{text-decoration: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);-webkit-user-select: none;-moz-user-focus: none;-moz-user-select: none;}
            .dialog1 li:hover{background-color: #e8f4ff;}
        }
        
    </style>
    <script>
        import  "../css/jquery.pagepiling.css";
        import  "../css/test.css"
        import  "../js/jquery-1.8.3.min.js";
        import "../js/jquery.pagepiling.min.js";
        import logo from "../img/logo.png";
        import hButton from "../img/h-button.png";
        import bg4 from "../img/bg4.png";
        import bg5 from "../img/bg5.png";
        import bg6 from "../img/bg6.png";
        import bg7 from "../img/bg7.png";
        import bg8 from "../img/bg8.png";
        import bg9 from "../img/bg9.png";
        import bg10 from "../img/bg10.png";
        import bg11 from "../img/bg11.png";
        import bg12 from "../img/bg12.png";
        import arrow from "./arrow.vue";
        import bg1 from "../img/bg1.png";
        import bg2 from "../img/bg2.png";
        import bg3 from "../img/bg3.png";
        let pageNo = ""
        $(function(){
           $('#dowebok').pagepiling({
                    sectionsColor: ['#00d8cc', '#00c13f', '#ff7d23', '#00c0ff'],
                    anchors: ['company', 'services', 'contact', 'resources'],
                    menu: '#menu',
                    // loopBottom: true,//isloop
                    // loopTop: true,
                    navigation:{
                        'display':'none'
                    },
                    normalScrollElements: '.pagefour_content , .content_show',
                    afterLoad(anchorLink, index){
                        //alert('滚动到了第' + index + '屏');
                        pageNo = index;
                    }
                });
                $(".pageFour_contentBox").hover(function(){
                    $(this).children(":first").css({"transform":"scale(1.2)","transition":"all 0.5s ease "})
                    $(this).children(".box_shadow").css({"opacity":"0.7","transition":"all 0.5s ease "})
                },function(){
                     $(this).children(":first").css({"transform":"scale(1)","transition":"all 0.5s ease "})
                     $(this).children(".box_shadow").css({"opacity":"0","transition":"all 0.5s ease "})
                })
                $(".dialog").click(function(){
                    $(".dialog").animate({'left':"-30%"},150)
                    $(".dialog1").animate({'left':"-70%"},150,'swing')
                    //$(".modal").hide();
                })
                $(".hButton").click(function(){
                    
                    //$(".modal").show()
                    $(".dialog").animate({'left':"70%"},150)
                    $(".dialog1").animate({'left':"0%"},150,'swing')
                    //$(".dialog1").animate({'width':"70%"},200,'swing')
                })
                $("#menu").click(function(){
                    //console.log("sdhgoergheio")
                    if($('.hhh').length && $('.hhh').length>0){
                        $('.hhh').hide()
                    }
                })
                $("#mobile_menu").click(function(){
                    //console.log("sdhgoergheio")
                    if($('.hhh').length && $('.hhh').length>0){
                        $('.hhh').hide()
                    }
                })
                $(".knowMore").click(function(){
                    if($('.hhh').length && $('.hhh').length>0){
                        $('.hhh').show()
                    }
                })
        });
    export default {
        data () {
                return {
                    logo,
                    hButton,
                    currentId:1,
                    bg1,bg2,bg3,
                    pageListimg:[bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12],
                    baseUrl:"https://labmagnetics.com/download/",
                    pageHref:["labmagnetics_sintered-neodymium-iron-boron.pdf","labmagnetics_sintered-smco.pdf","labmagnetics_bonded-magnet.pdf","labmagnetics_alnico.pdf","labmagnetics_fecrco.pdf","labmagnetics_powder-injection-molding-materials.pdf","labmagneitcs_soft-magnetic-materials.pdf","2018repm_fullpaper_meng_design-of-smart-magnetic-devices_foreseegroup_v2.pdf","intermag2018_gb10_digest.pdf"],
                    contentname:["Sintered Neodymium Iron Boron","Sintered SmCo","Bonded Magnets","Alnico","FeCrCo","Powder Injection Molding Materials","Soft Magnetic Materials","Design of Smart Magnetic Devices","Magnetic Force Equations"],
                    content1:`Lab Magnetics has a wide range of R&D, testing and prototyping capabilities available in our facility located in the heart of Silicon Valley in San Jose,California. We provide turnkey engineering solutions, quick-turn fabrication, designing, and testing for all types of magnetic materials and devices. `,
                    content2:`Equipped with advanced testing and fabrication equipment, Lab Magnetics serves a multitude of applications across a wide variety of industries including automotive, consumer electronics, appliance, security, medical, sensor, and aerospace. We understand the simple to complex magnetic designs associated with these industries and many others.`,
                    content3:`At Lab Magnetics, we are passionate about delivering high quality magnetic components and precise analysis of magnetic materials to all of our worldwide customers. `,
                    content4:`Lab Magnetics utilizes in-house capabilities to integrate magnetic functionality into our customers’ products. We provide complete engineering and manufacturing services to work as an extension of your magnetic solutions.`
                }
            },
       methods:{
            onMouseScroll(e){
                e.preventDefault();
                var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                var delta = Math.max(-1, Math.min(1, wheel) );
                if(delta<0){//向下滚动
                    // console.log('向下滚动');
                }else{//向上滚动
                    // console.log('向上滚动');
                    // console.log($(".txt").scrollTop())
                    // console.log(pageNo)
                    if($(".pagefour_content").scrollTop() <10 && $(".pagefour_content").scrollTop() >=0 && pageNo == 4){
                        $.fn.pagepiling.moveTo(3);
                    }
                }    
            },
            sendEmail(e){
                //console.log(e.target)
                const aaa = e.target;
                window.location.href="mailto:info@labmagnetics.com"
            },
            custormAnchor(pageNo) {
                //console.log("被点击了")
                $.fn.pagepiling.moveTo(pageNo);
                // 找到锚点
                //let anchorElement = document.getElementById(anchorName);
                // 如果对应id的锚点存在，就跳转到锚点
                //if(anchorElement) { anchorElement.scrollIntoView(); }
            }
        },
        mounted () {
               $(document).on('mousewheel DOMMouseScroll', this.onMouseScroll); 
        },
        components:{
            arrow
        }
        }
    </script>