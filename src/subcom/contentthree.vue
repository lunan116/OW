  <template>
        <div>
            <div v-if="msg" class="hhh1 animated bounceInLeft " style="color:green;">
                <h3>Prototyping</h3>
                <p>Lab Magnetics’ end-to-end prototyping services provide the flexibility to adjust parameters rapidly and analyze designs more quickly. During prototyping we will work through all stages of the manufacturing process to ensure process optimization. For less complex designs and assemblies, our quick-turn capability can allow for finished prototypes within 48hrs. </p>
                <p>Lab Magnetics manufactures all kinds of materials, including NdFeB, SmCo, Alnico, and many other alloys and steels. </p>
                <div class="imgBox">
                    <div style="width: 23%;margin: 1%;float: left;">
                        <img :src="s4" alt="" >
                    </div>
                    <div style="width: 23%;margin: 1%;float: left;">
                        <img :src="s5" alt="" >
                    </div>
                    <div style="width: 23%;margin: 1%;float: left;">
                        <img :src="s6" alt="" >
                    </div>
                    <div style="width: 23%;margin: 1%;float: left;">
                        <img :src="s7" alt="" >
                    </div>
                    <div class="clear"></div>
                </div>
                <h3>Machining</h3>
                <p>Magnet manufacturing requires special handling, processes, procedures, and equipment due to the brittle nature of materials. Lab Magnetics is equipped with Wire Electric Discharge Machines (EDM), EDM Drill Machines, Linear Surface Grinders and Computer Numerically Controlled (CNC) mills that give us the capability of achieving exact specifications.</p>
                <div class="imgBox1">
                    <div style="width: 46%;margin: 2%;float: left;">
                        <img :src="s8" alt="">
                    </div>
                    <div style="width: 46%;margin: 2%;float: left;">
                        <img :src="s9" alt="">
                    </div>
                    <div class="clear"></div>
                </div>
                <h3>Magnetizing</h3>
                <p>Magnetization is achieved by exposing a magnet or magnetic assembly to an externally applied field. To saturate a magnet, a peak field between 2 and 2.5 times the intrinsic coercivity must be applied. This can be accomplished with the correct magnetizers and fixtures. Our pulse magnetizers generate a field up to 12 T, enabling the magnetization of high coercivity materials, magnetic assemblies, and assemblies with uniquely designed magnetic fields and patterns. Our engineering and production team can offer solutions to the magnetizing process best suited to your applications. </p>
                <h3>Magnetic Assemblies</h3>
                <p>Our vast experience with magnetic assemblies spans almost every industry. From micron vibration motors to large dipoles, we understand how to design, manufacture, and use the appropriate fixtures and equipment. Magnetic materials can encounter stress and possible demagnetization which our engineers account for during development of all procedures. Proper assembly techniques and protocols ensures materials are protected, and assembly process is efficient, and the desired magnetic outcome is achieved each time.</p>
                <div class="imgBox">
                    <div  style="width: 23%;margin: 1%;float: left;">
                        <img :src="s10" alt="">
                    </div>
                    <div  style="width: 23%;margin: 1%;float: left;">
                        <img :src="s11" alt="">
                    </div>
                    <div  style="width: 23%;margin: 1%;float: left;">
                        <img :src="s12" alt="">
                    </div>
                    <div  style="width: 23%;margin: 1%;float: left;">
                        <img :src="s13" alt="">
                    </div>
                    <div class="clear"></div>
                </div>
            </div> 
        </div>
    </template>
    
    
    
    <style lang="css" scoped>
        .clear{clear: both;}
        .hhh1{
            box-shadow: 1px 4px 12px 1px #333;
            border-radius: 2%;
            color: aqua;
            font-size: 50px;
            width: 80vw;
            /* min-height: 100vh; */
            background-color: white; 
            z-index: 1000; 
            position: absolute;
            margin-left: 10vw;
            padding:20px 0px 60px;
            margin-bottom: 25px;
        }
        h3{
            font-size: 25px;
            text-align: center;
            color: #333 !important;
        }
        p{text-indent: 25px;font-size: 14px;
            text-align: left;
            color: #333 !important;padding:0px 15px;}
        .imgBox,.imgBox1{width: 80%;margin:30px auto;}
        
        
    </style>
    <script>
    import s4 from '../img/services4.png'
    import s5 from '../img/services5.png'
    import s6 from '../img/services6.png'
    import s7 from '../img/services7.png'
    import s8 from '../img/services8.png'
    import s9 from '../img/services9.png'
    import s10 from '../img/services10.png'
    import s11 from '../img/services11.png'
    import s12 from '../img/services12.png'
    import s13 from '../img/services13.png'
    
    export default {
        data () {
                return {
                    s4,
                    s5,
                    s6,
                    s7,
                    s8,
                    s9,
                    s10,
                    s11,
                    s12,
                    s13,
                    text: "login.vue",
                    msg:true
                }
            }
        }
    </script>