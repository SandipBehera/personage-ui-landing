import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from './pages/home';
import "./index.css";
import About from "./pages/about";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<HomeComponent/>} /> 
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
     
    </Router>
  );
}

export default App;
