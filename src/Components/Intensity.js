import BulbOff from "../Assets/BulbOff.png";
import BulbOn from "../Assets/BulbOn.png";

import { useState } from 'react'
//import { Slider } from 'react-native';
import React from 'react';
import Slider from 'react-input-slider';

const Intensity = () => {
    const [state, setState] = useState({ x: 10, y: 10 });
    
    return ( 
        <div>
            <p>Intensity</p>
            <div className="Intensity_Container">
                <img className="Intensity_Bolb" src={ BulbOff } alt="" />
                   
                <img className="" src={ BulbOn } alt="" />
            </div>
        </div>
    );
}
export default Intensity;


/*
<Slider className="Slider"
axis="x"
x={state.x}
onChange={({ x }) => setState(state => ({ ...state, x }))}
/>

<svg className="Intensity_Swipe" xmlns="http://www.w3.org/2000/svg" width="258.5" height="15.597" viewBox="0 0 258.5 15.597">
    <g id="lines" transform="translate(-58.5 -354)">
        <line id="Line_1" data-name="Line 1" x2="258" transform="translate(58.5 354.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_2" data-name="Line 2" y2="4.097" transform="translate(59.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_3" data-name="Line 3" y2="4.097" transform="translate(110.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_4" data-name="Line 4" y2="4.097" transform="translate(162.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_5" data-name="Line 5" y2="4.097" transform="translate(213.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_6" data-name="Line 6" y2="4.097" transform="translate(265.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
        <line id="Line_7" data-name="Line 7" y2="4.097" transform="translate(316.5 365.5)" fill="none" stroke="#cecece" stroke-width="1"/>
    </g>
</svg>
*/

