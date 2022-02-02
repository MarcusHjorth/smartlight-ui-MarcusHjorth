import { TiArrowLeft } from "react-icons/ti";
import Lamp from "../Assets/Lamp.png"

const RoomDetails = () => {
    return ( 
        <div>
            <header className="Room_Header">
                <div>
                    <p className="Header_Room_P"><TiArrowLeft className="Header_Room_arrow" /> Bed</p>
                    <p className="Header_Room_P">Room</p>
                </div>
                <img className="NavIcons" src={Lamp} alt=""/>
            </header>

           <div className="Details_Settings">

           </div>
        </div>
     );
}
 
export default RoomDetails;