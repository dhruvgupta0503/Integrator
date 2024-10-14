import './index.css'
import Home from "./pages/Home.jsx"
import Navbar from './Components/Navbar'
import Error from './pages/Error.jsx';
import SearchRide from './pages/SearchRide.jsx';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRide />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
