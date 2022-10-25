import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Timer from "./routes/Timer";
import {Route, Routes} from "react-router-dom";



function App() {




  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/timer" element={<Timer/>}/>
        </Routes>
    </>
  );
}

export default App;
