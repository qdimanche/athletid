import React from 'react';
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-preview.png";
import athletidAppPreview from "../assets/images/athletid-app-preview.png";
import AboutHome from "../components/AboutHome";
import Footer from "../components/Footer";


const MyComponent = () => {
    return (
        <div>
            <Navbar/>
            <HeroVideo src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"}/>
            <FullScreenBgImage src={timerAppPreview} title={"Title"}  tag={"Bientôt disponible"}/>
            <FullScreenBgImage src={athletidAppPreview} title={"Title"}  tag={"Nouveau"}/>
            <AboutHome/>
            <Footer/>
        </div>
    );
};

export default MyComponent;
