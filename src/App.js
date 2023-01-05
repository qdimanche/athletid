import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Timer from "./routes/Timer";
import SocialApp from "./routes/SocialApp";
import Contact from "./routes/Contact"
import {Route, Routes} from "react-router-dom";
import About from "./routes/About";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsOfUse from "./routes/TermsOfUse";


function App() {


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/timer" element={<Timer/>}/>
            <Route path="/network" element={<SocialApp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/a-propos" element={<About/>}/>
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy/>}/>
            <Route path="/conditions-de-vente-et-d-utilisation" element={<TermsOfUse/>}/>
        </Routes>
    );
}

export default App;
