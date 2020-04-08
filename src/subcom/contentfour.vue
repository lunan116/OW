  <template>
        <div>
            <div v-if="msg" class="hhh1 animated bounceInLeft " style="color:green;">
                <h3>Integrate & Testing</h3>
                <p>Complete magnetic solution testing is available at Lab Magnetics. This includes Magnetic Material Qualification & Validation, Magnetic Field Mapping, Mechanical Force Calculation, Metallic Coating Thickness Analysis, and Soft Magnetic Material Testing. These extensive testing capabilities, combined with our experienced team, make Lab Magnetics a reliable and valuable partner.</p>
                <div class="imgBox1">
                    <div style="width: 46%;margin: 2%;float: left;">
                        <img :src="s14" alt="">
                    </div>
                    <div style="width: 46%;margin: 2%;float: left;">
                        <img :src="s15" alt="">
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
    import s14 from '../img/services14.png'
    import s15 from '../img/services15.png'
    export default {
        data () {
                return {
                    s14,
                    s15,
                    text: "login.vue",
                    msg:true
                }
            }
        }
    </script>