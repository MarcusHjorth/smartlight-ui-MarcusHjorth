import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';


const SingleLightSlider = () => {
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups"
    const LightState = URL + "/lights/52"

    const [ rooms, setRooms ] = useState()

    const { id } = useParams()

    useEffect(() => {
        axios({
            url: GroupLights + id,
            method: "GET",
        }).then(request => { 
            setRooms(request.data)
            
        })
    }, [ ])
    
    //console.log(rooms);
    
    return ( 
        rooms ?
        <motion.ul className="flex w-full justify-end  text-DarkPurple mt-[20px]"
            initial={{x: 350 }}
            animate={{x: -15 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            drag="x"
            dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0}}

        >
            <li  className="w-[100px] h-[40px] bg-white rounded-md p-3 m-[5px] flex justify-center items-center"> bedroom </li>
            <li className="w-[100px] h-[40px] bg-white rounded-md p-3 m-[5px] flex justify-center items-center"> bedroom </li>
            {/* <li className="w-[100px] h-[40px] bg-white rounded-md p-3 m-[5px] flex justify-center items-center"> bedroom </li> */}
        </motion.ul> : <p>Loading</p>
     );
}
 
export default SingleLightSlider;