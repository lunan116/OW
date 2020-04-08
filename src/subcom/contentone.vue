  <template>
        <div>
            <div v-if="msg" class="hhh1 animated bounceInLeft " style="color:green;">
                <h3>Product Design</h3>
                <p>Lab Magnetics offers full-service product development capabilities, employing a variety of 2D and 3D magnetic simulation software and characterization equipment. Our engineering team is skilled at material selection and developing complex magnetic assemblies and modules. </p>
                <p>Our magnetic capabilities include:</p>
                <p>• Finite Element Analysis (FEA)</p>
                <p>• Magnetic 2D & 3D mapping</p>
                <p>• Force measurement</p>
                <p>• World-class design and instrumentation equipment</p>
            </div> 
        </div>
    </template>
    
    
    
    <style lang="css" scoped>
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
        }
        h3{
            font-size: 25px;
            text-align: center;
            color: #333 !important;
        }
        p{text-indent: 25px;font-size: 14px;
            text-align: left;
            color: #333 !important;padding:0px 15px;}
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