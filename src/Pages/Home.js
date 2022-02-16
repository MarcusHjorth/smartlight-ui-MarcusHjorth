import Rooms from "../Components/Rooms";
import User from "../Components/User";

const Home = (props) => {
    return ( 
        <div>
            <header className="Home_Header">
                <div className="Home_Header_Text">
                    <p className="Header_P">Control</p>
                    <p className="Header_P">Panel</p>
                </div>
                <User />
            </header>

            <Rooms data={props.data} />
        </div>
     );
}
 
export default Home;