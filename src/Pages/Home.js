import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";

import BackgroundBubles from "../Components/BackgroundBubles";
import Rooms from "../Components/Rooms";
import User from "../Components/User";

const Home = (props) => {
    /* const URL = "http://192.168.8.100/api/TtxPSfr7mK8-5hShghYZ8e4EvjzkNuAHRvu1jm9h"
    const SingleLight = URL + "/lights/52/state"
    const GroupLights = URL + "/groups"
    const LightState = URL + "/lights/52"

    const [ data, setData ] = useState()

    useEffect(() => {
        axios({
            url: GroupLights,
            method: "GET",
        }).then(request => { 
            setData(request.data)
        })
    }, [])

    console.log(data); */

    return ( 
        <div>
            <BackgroundBubles />
            <header className="flex flex-row justify-between mx-[2rem] py-[2rem] items-center">
                <div className="flex flex-row text-white text-[32px]">
                    <p className="font-bold">Control</p>
                    <p className="">Panel</p>
                </div>
                <User />
            </header>

            <Rooms />

        </div>
     );
}
// til Rooms --- data={props.data}
export default Home;