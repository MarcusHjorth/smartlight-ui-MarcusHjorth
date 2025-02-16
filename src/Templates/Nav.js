import Settings from "../Assets/Settings.png"
import Bulb from "../Assets/Bulb.png"
import FeatherHome from "../Assets/FeatherHome.png"

import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="bg-white flex justify-around flex-row p-[7px] py-[15px]">
            <Link to="/RoomDetails"><img className="NavIcons" src={Bulb} alt="" /></Link>
            <Link to="/"><img className="NavIcons" src={FeatherHome} alt="" /></Link>
            <Link to="*"><img className="NavIcons" src={Settings} alt="Settings" /></Link>
        </div>
     );
}
 
export default Nav;