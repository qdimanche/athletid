import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Timer from "./routes/Timer";
import SocialApp from "./routes/SocialApp";
import Contact from "./routes/Contact"
import {Route, Routes} from "react-router-dom";



function App() {




  return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/timer" element={<Timer/>}/>
            <Route path="/socialApp" element={<SocialApp/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
  );
}

export default App;
