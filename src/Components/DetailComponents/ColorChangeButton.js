import ColorConverter from "cie-rgb-color-converter";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { motion } from 'framer-motion'

const ColorChangeButton = ({ r, g, b, i}) => {
    let xy = ColorConverter.rgbToXy( r, g, b);
    const [color, setColor] = useState([]);

    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h/lights/52/state"

    useEffect(() => {
        axios({
            url: URL,
            method: "PUT",
            data: {
                xy: [color.x, color.y]
            }
        })
    }, [color])

    return ( 
        <motion.li  className="h-[30px] w-[30px] rounded-full shadow-lg flex justify-center items-center flex-row" 
            style={{backgroundColor: `rgb(${ r }, ${ g }, ${ b })`}}
            onClick={() => {
            setColor(xy);
            console.log(xy)}}>
        </motion.li>
     );
}
 
export default ColorChangeButton;