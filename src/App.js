import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails"
import Nav from "./Templates/Nav";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RoomDetails" element={<RoomDetails />} />
        </Routes>

        <Nav />
      </div>
    </Router>
  );
}
/*
*/
export default App;
