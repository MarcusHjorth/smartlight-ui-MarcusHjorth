import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import {ReactComponent as BedIcon} from "../Assets/Svg/bed.svg";
import {ReactComponent as LivingRoomIcon} from "../Assets/Svg/living.svg";
import {ReactComponent as KitchenIcon} from "../Assets/Svg/kitchen.svg";
import {ReactComponent as BathIcon} from "../Assets/Svg/bathroom.svg";
import {ReactComponent as OutdoorIcon} from "../Assets/Svg/outdoor.svg";
import {ReactComponent as BalconyIcon} from "../Assets/Svg/balcony.svg";

import RoomDetails from "../Pages/RoomDetails";

const rooms = [
      {
          room: "Bed Room",
          icon: <BedIcon />,
          lights: 4,
          id: 1
      },
      {
          room: "Living Room",
          icon: <LivingRoomIcon />,
          lights: 2,
          id: 2
      },
      {
          room: "Kitchen",
          icon: <KitchenIcon />,
          lights: 5,
          id: 3
      },
      {
          room: "Bathroom",
          icon: <BathIcon />,
          lights: 1,
          id: 4
      },
      {
          room: "Outdoor",
          icon: <OutdoorIcon />,
          lights: 5,
          id: 5
      },
      {
          room: "Balcony",
          icon: <BalconyIcon />,
          lights: 2,
          id: 6
      },  
  ];

const Rooms = () => {
  
    return (
        <motion.div className="bg-GrayIsh rounded-t-[25px] gap-[10px] absolute bottom-[60px] h-[600px] w-full "
        initial={{y: 160}}
        animate={{y: 0}}
        transition={{ delay: 0.1, duration: 0.5 }}
        >
             <p className="text-DarkPurple text-[24px] font-semibold pt-[20px] pl-[20px]">All rooms</p>
             <ul className="grid grid-cols-2 grid-auto-rows place-items-center gap-[20px] mx-auto p-[25px]">
                { rooms.map(({ room, icon, lights }, i) => (
                    <Link   key={i} to={`/RoomDetails/${i}`} >
                        <li  
                        room={room} lights={lights}
                        className="bg-white rounded-[20px] h-[150px] w-[150px] flex justify-center items-start flex-col gap-[10px] shadow-md p-[20px]" >
                            {icon}
                            <p className="">{ room }</p>
                            <p className=" text-Yellow">{ lights } Lights</p>
                        </li>    
                    </Link> 
                ))}
            </ul>
        </motion.div>
    );
}
//<img className="h-[75px] w-[75px]" src={ room.icon } alt={room.location} />


export default Rooms;
