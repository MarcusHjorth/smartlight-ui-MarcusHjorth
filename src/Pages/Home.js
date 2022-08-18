import BackgroundBubles from "../Components/BackgroundBubles";
import Rooms from "../Components/Rooms";
import User from "../Components/User";


const Home = (props) => {
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