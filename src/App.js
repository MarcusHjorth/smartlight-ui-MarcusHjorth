import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails"
import Nav from "./Templates/Nav";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ErrorBoundary from "./Pages/ErrorBoundary";
import LampContextProvider from "./Utilitys/LampContext";


function App() {
  return (
    <Router>
      <div className="bg-Blue w-screen h-screen relative">
			<LampContextProvider>
        <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/RoomDetails/:id" element={
					<ErrorBoundary>
					<RoomDetails className="absolute bottom-[200px] w-full"/>
				</ErrorBoundary> } />
        </Routes>
			</LampContextProvider>

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