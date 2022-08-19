import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";

import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

  const Rooms = () => {
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups"
    const LightState = URL + "/lights/52"

    const [ rooms, setRooms ] = useState()

    useEffect(() => {
        axios({
            url: GroupLights,
            method: "GET",
        }).then(request => { 
            setRooms(request.data)
        })
    }, [ ])

    return (
        <motion.div className="bg-GrayIsh rounded-t-[25px] gap-[10px] absolute bottom-[60px] h-[600px] w-full overflow-scroll"
        initial={{y: 160}}
        animate={{y: 0}}
        transition={{ delay: 0.1, duration: 0.5 }}
        >
            <p className="text-DarkPurple text-[24px] font-semibold pt-[20px] pl-[20px]">All rooms</p>
            <ul className="grid grid-cols-2 grid-auto-rows place-items-center gap-[20px] mx-auto p-[25px]">
                {/* Venter på response fra api - gør objektet til array, mapper igennem grupperne */}
                {rooms && Object.values(rooms).map(({ name, lights }, i ) => {
                    const id = Object.keys(rooms)[i]
                    return <Link key={ i } to={`/RoomDetails/${id}`} >
                        <li  
                        room={rooms} lights={lights}
                        className="bg-white rounded-[20px] h-[150px] w-[150px] flex justify-center items-start flex-col gap-[10px] shadow-md p-[20px]" >
                            <p className="">{ name }</p>
                            <p className=" text-Yellow">{ lights.length } Lights</p>
                        </li>
                    </Link> 
                    })}
            </ul>
        </motion.div>
    );
}



export default Rooms;
