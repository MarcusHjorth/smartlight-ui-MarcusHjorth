import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { TiArrowLeft } from "react-icons/ti";

import 'rc-slider/assets/index.css';
import axios from "axios";
import _ from 'lodash';

import Scenes from "../Components/DetailComponents/Scenes";
import Colors from "../Components/DetailComponents/Colors";
import Intensity from "../Components/DetailComponents/Intensity";
import Switch from "../Components/DetailComponents/Switch";
import Lamp from "../Components/DetailComponents/Lamp";


const RoomDetails = () => {
    
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups/18/action"
    const LightState = URL + "/lights/52"

    /* const [ on, setOn ] = useState(null)
    const [ bri, setBri ] = useState(124);

    const throttle = useMemo(() => _.throttle(changeBri, 1000), []); */

    /* useEffect(() => {
        axios({
            url: selectedLight,
            method: "PUT",
            data: {
                on,
                bri,
            }
        })
    }, [on, bri])

    useEffect(() => {
        axios({
            url: LightState,
            method: "GET",
        })
        .then((res ) => {
            setOn(res.data.state.on)
        })
    }, []) */


    return ( 
        <div>
            <header className="w-full px-[20px]">
                <div className="text-white text-[32px] flex justify-between flex-row items-center">
                    <Link to="/">
                        <p className="flex flex-row items-center mt-[3.5rem]">
                            <TiArrowLeft className="text-[32px]"/>
                            {  } gang gang
                        </p>
                        {/* <p>{ props.data.lights }</p> */}
                    </Link>
                    <Lamp/>
                </div>
                <motion.p className="text-Yellow text-[18px] font-semibold"
                  initial={{y: -60, opacity: 0}}
                  animate={{y: 0, opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.75 }}
                >
                    { } Lights
                </motion.p>

                
            </header>
            
            <motion.main className="bg-GrayIsh rounded-t-[25px] gap-[10px] absolute bottom-[60px] h-[540px] w-full text-DarkPurple text-[18px] font font-semibold p-[20px]"
                initial={{y: 0}}
                animate={{y: 60}}
                transition={{ delay: 0.1, duration: 0.5 }}
                >
                <Switch className=""/>
                <Intensity className="" />
                <Colors className="" />
                <Scenes className="" />
            </motion.main>
        </div>
     );
    }

    export default RoomDetails;