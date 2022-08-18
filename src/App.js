import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails"
import Nav from "./Templates/Nav";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ErrorBoundary from "./Pages/ErrorBoundary";

/* const rooms = [
  {
		room: "Bed Room",
		icon: <BedIcon />,
		lights: 4,

	},
	{
		room: "Living Room",
		icon: <LivingRoomIcon />,
		lights: 2,
	},
	{
		room: "Kitchen",
		icon: <KitchenIcon />,
		lights: 5,
	},
	{
		room: "Bathroom",
		icon: <BathIcon />,
		lights: 1,
	},
	{
		room: "Outdoor",
		icon: <OutdoorIcon />,
		lights: 5,
	},
	{
		room: "Balcony",
		icon: <BalconyIcon />,
		lights: 2,
	},  
]; */

function App() {
  return (
    <Router>
      <div className="bg-Blue w-screen h-screen relative">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/RoomDetails/:id" element={
            <ErrorBoundary>
            <RoomDetails className="absolute bottom-[200px] w-full"/>
          </ErrorBoundary> } />
        </Routes>

        <div className="absolute bottom-0 w-full">
          <Nav />
        </div>

      </div>
    </Router>
  );
}
/*
*/
export default App;