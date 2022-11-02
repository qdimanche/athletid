import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Timer from "./routes/Timer";
import SocialApp from "./routes/SocialApp";
import HomepageContent from "./routes/HomepageContent";
import {Route, Routes} from "react-router-dom";



function App() {




  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/timer" element={<Timer/>}/>
            <Route path="/socialApp" element={<SocialApp/>}/>
            <Route path="/homeContent" element={<HomepageContent/>}/>

        </Routes>
    </>
  );
}

export default App;
