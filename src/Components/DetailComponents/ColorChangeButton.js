import ColorConverter from "cie-rgb-color-converter";
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';
import { LampContext } from '../../Utilitys/LampContext';


const ColorChangeButton = ({ r, g, b, i}) => {
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups/"
    
    const { id } = useParams()
    const [color, setColor] = useState([]);
    let xy = ColorConverter.rgbToXy( r, g, b);
    
    const { setBulbColor, bulbColor, setBulbBri } = useContext(LampContext)
    
    useEffect(() => {
        axios({
            url: GroupLights + id  + "/action",
            method: "PUT",
            data: {
                xy: [color.x, color.y]
            }
        })
    }, [ color ])
    
    return ( 
        <motion.li  className="h-[30px] w-[30px] rounded-full shadow-lg flex justify-center items-center flex-row" 
        style={{backgroundColor: `rgb(${ r }, ${ g }, ${ b })`}}
        onClick={() => {
            setColor(xy);
            setBulbColor({r, g, b})
            console.log(bulbColor)}}>
            
        </motion.li>
     );
}
 
export default ColorChangeButton;