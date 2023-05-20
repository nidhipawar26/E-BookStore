
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import { NotFound } from "./NotFound";

const App = () => {
  return(
  <BrowserRouter>
  <div> 
    <Link to="/" style={{marginLeft: 5,}}>Home</Link>
    <Link to="/apple" style={{marginLeft:10,}}>Apple</Link> 
    <Link to="/applet" style={{marginLeft: 10,}}>Applet</Link>
  </div>
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/apple" element={<Apple />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
  </BrowserRouter>

);
};
export default App;
