import { TiArrowLeft } from "react-icons/ti";

import Lamp1 from "../Assets/Lamp1.png";
import PowerOff from "../Assets/PowerOff.png"
import Scenes from "../Components/Scenes";

import Colors from "../Components/Colors";
import Intensity from "../Components/Intensity";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

import { motion } from 'framer-motion'


const RoomDetails = (props) => {

    const { id } = useParams()
    /*
    console.log(id);
    console.log(props.data.lights)
    console.log(props.data)
    */
   
    console.log(id)
    console.log(props.data.id)

   if ( id == props.data.id) {
       console.log("Hello")
   } else {
       console.log("no")
   }




    return ( 
        <div>
            <header className="Room_Header">
                <div className="Room_Header-Text">
                    <Link to="/"><p className="Header_Room_P">
                        <TiArrowLeft className="Header_Room_arrow" />
                        { id }</p>
                        <p>{ props.data.lights }</p>
                    </Link>
                </div>

                <img className="NavLamp" src={Lamp1} alt=""/>
            </header>
            

            <motion.div className="Details_Settings"
                initial={{y: 0}}
                animate={{y: 130}}
                transition={{ delay: 0.1}}
                transition={{ duration: 0.5 }}
                >
                <img className="PowerOff" src={PowerOff} alt="" />
                <Intensity />
                <Colors />
                <Scenes />
            </motion.div>
        </div>
     );
    }

    export default RoomDetails;