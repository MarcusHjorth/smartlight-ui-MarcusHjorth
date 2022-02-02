import BedRoom from "../Components/BedRoom";
import Rooms from "../Components/Rooms";


const Home = () => {
    return ( 
        <div>
            <header className="Home_Header">
                <p className="Header_P">Control</p>
                <p className="Header_P">Panel</p>
            </header>

            <Rooms />
        </div>
     );
    }
    //<Nav />
 
export default Home;