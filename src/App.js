import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from './pages/home';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<HomeComponent/>} /> 
        </Routes>
     
    </Router>
  );
}

export default App;
