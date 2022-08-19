import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { TiArrowLeft } from "react-icons/ti";
import { useParams } from 'react-router-dom';
import ColorConverter from "cie-rgb-color-converter";

import 'rc-slider/assets/index.css';
import axios from "axios";
import _ from 'lodash';

import Scenes from "../Components/DetailComponents/Scenes";
import Colors from "../Components/DetailComponents/Colors";
import Intensity from "../Components/DetailComponents/Intensity";
import Switch from "../Components/DetailComponents/Switch";
import Lamp from "../Components/DetailComponents/Lamp";
import { LampContext } from '../Utilitys/LampContext';
import BackgroundBubles from '../Components/BackgroundBubles';
import SingleLightSlider from '../Components/DetailComponents/SingleLightSlider';


const RoomDetails = () => {
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups/"
    const LightState = URL + "/lights/52"

    const { setBulbColor, setBulbBri } = useContext(LampContext)

    const [ rooms, setRooms ] = useState()

    const { id } = useParams()

    


    useEffect(() => {
        axios({
            url: GroupLights + id,
            method: "GET",
        }).then(request => { 
            setRooms(request.data)
            let rgb = ColorConverter.xyBriToRgb(request.data.action.xy[0], request.data.action.xy[1], request.data.action.bri)
            setBulbColor(rgb)
        })
    }, [ ])

    return ( 
        rooms ?
        <div>
            <header className="w-full px-[20px]">
                <div className="text-white text-[32px] flex justify-between flex-row items-center">
                    <Link to="/">
                        <p className="flex flex-row items-center mt-[3.5rem]">
                            <TiArrowLeft className="text-[32px]"/>
                            {rooms.name }
                        </p>
                    </Link>
                    <Lamp/>
                </div>
                <motion.p className="text-Yellow text-[18px] font-semibold"
                  initial={{y: -60, opacity: 0}}
                  animate={{y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.75 }}
                >
                    { rooms.lights.length } Lights
                </motion.p>
                <BackgroundBubles />
            </header>

            <section className="w-full overflow-hidden justify-end">
                <SingleLightSlider />
            </section>

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
        </div> : <p>Loading</p>
     );
    }

    export default RoomDetails;