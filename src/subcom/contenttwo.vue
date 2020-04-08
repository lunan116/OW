  <template>
        <div>
            <div v-if="msg" class="hhh1 animated bounceInLeft " style="color:green;">
                <h3>Finite Element Analysis (FEA)</h3>
                <p>Finite Element Analysis (FEA) is used by our engineering staff to model a design prior to producing prototypes. These modeling programs, including Infolytica MagNet and Ansys Maxwell, analyze magnetic properties in order to arrive at optimal solutions. These solutions can then be tested and fine-tuned against a prototype of the magnet structure or assembly. FEA can also determine flux densities, torque, and forces of a specific design or magnet may be calculated. Results are plotted and analyzed through vector magnetic potentials, flux density maps, and flux patterns. </p>
                <div style="width:80%;display:block;margin:30px auto;max-width: 700px;">
                    <img :src="s1" alt="" >
                </div>
                <h3>XYZ Field Scanning System</h3>
                <p>Lab Magnetics uses the GM 460 Brockhaus to obtain 3D measurements of the flux density of magnets and magnetic assemblies.  The equipped 3-channel gaussmeter combined with the computer-controlled XYZ movement allows the system to measure and record consistent data. It has the capability of 3 linear movements in the X, Y, Z axes. The XYZ Scanner has a working volume of 400x400x400mm and a step size as low as 0.10mm with and accuracy of ±0.01mm. It can record the direction, amplitude and polarity of the magnets which can be displayed in 3D vector and contour plots.  </p>
                <div style="width:80%;display:block;margin:30px auto;max-width: 700px;">
                    <img :src="s2" alt="" >
                </div>
                <h3>Force Measurement System</h3>
                <p>The Force Measurement System measures the attractive and repulsive force through a range of distances between two magnets, or between a magnet to metal. The system can go as low as Zero Air Gap and determine and record the breakaway force. </p>
                <div style="width:80%;display:block;margin:30px auto;max-width: 700px;">
                    <img :src="s3" alt="" >
                </div>
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
        
    </style>
    <script>
    import s1 from '../img/services1.png'
    import s2 from '../img/services2.png'
    import s3 from '../img/services3.png'
    export default {
        data () {
                return {
                    s1,
                    s2,
                    s3,
                    text: "login.vue",
                    msg:true
                }
            }
        }
    </script>