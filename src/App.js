import Footer from "./Footer/Footer";
import "./App.css";
import HomePage from "./Homepage/HomePage";
import ReusableButton from "./ReusableButton/ReusableButton";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




const App = () => (
    
    <BrowserRouter>
    <div className="App">     
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    </div>
    </BrowserRouter>

)

export default App;


