import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails"
import Nav from "./Templates/Nav";


import BedRoom from "./Assets/bed.png";
import LivingRoom from "./Assets/room.png";
import Kitchen from "./Assets/kitchen.png";
import Bathroom from "./Assets/bathtube.png";
import Outdoor from "./Assets/house.png";
import Balcony from "./Assets/balcony.png";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ErrorBoundary from "./Pages/ErrorBoundary";

const rooms = [{
    "location": "Bed Room", 
    "icon": BedRoom,
    "lights": 4,
    "id": 1
  }, {
    "location": "Living Room",
    "icon": LivingRoom,
    "lights": 2,
    "id": 2 
  }, {
    "location": "Kitchen",
    "icon": Kitchen,
    "lights": 4,
    "id": 3
  }, {
    "location": "Bathroom",
    "icon": Bathroom,
    "lights": 1, 
    "id": 4
  }, {
    "location": "Outdoor",
    "icon": Outdoor,
    "lights": 5, 
    "id": 5
  }, {
    "location": "Balcony",
    "icon": Balcony,
    "lights": 2,
    "id": 6
  }
];

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home data={rooms}/>} />
          <Route path="/RoomDetails/:id" element={
          <ErrorBoundary>
            <RoomDetails data={rooms} />
          </ErrorBoundary> } />
        </Routes>

        <Nav />
      </div>
    </Router>
  );
}
/*
*/
export default App;
