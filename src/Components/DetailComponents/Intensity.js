import React, { useState, useEffect, useMemo } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from "axios";
import _ from 'lodash';

import { ReactComponent as BulbOnIcon } from "../../Assets/Svg/bulbOn.svg";
import { ReactComponent as BulbOffIcon } from "../../Assets/Svg/bulbOff.svg";

const Intensity = () => {
    const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups/18/action"
    const LightState = URL + "/lights/52"
    
    const [ bri, setBri ] = useState(124);

    const changeBri = (value) => {
        setBri(value);
        //console.log(value);
      };
    
      const throttle = useMemo(() => _.throttle(changeBri, 1000), []);

    useEffect(() => {
        axios({
            url: SingleLight,
            method: "PUT",
            data: {
                bri,
            }
        })
    }, [bri])

    useEffect(() => {
        axios({
            url: LightState,
            method: "GET",
        })
        .then((res ) => {
            setBri(res.data.state.bri)
        })
    }, [])

    return ( 
        <section className="">
            <p className="my-[20px]">Intensity</p>
            <div className="flex flex-row items-end">
                <BulbOffIcon className="mr-[20px]"/>

                <Slider
                    className="w-full"
                    defaultValue={bri} 
                    onChange={throttle}
                    max={255}
                    marks={100}
                    step={1}
                />

                <BulbOnIcon className="ml-[20px]"/>

            </div>
        </section>
    );
}
export default Intensity;
