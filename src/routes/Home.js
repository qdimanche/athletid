import React from 'react';
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-preview.png";
import athletidAppPreview from "../assets/images/athletid-app-preview.png";
import AboutHome from "../components/AboutHome";
import ContactSupport from "../components/ContactSupport";
import Footer from "../components/Footer";
import {useInView} from "react-intersection-observer";



const MyComponent = () => {

    const { ref: bgWhite, inView: myElementIsVisible } = useInView();

    if (myElementIsVisible===true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }else  {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }


    return (
        <div>
            <Navbar/>
            <HeroVideo src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"}/>
            <FullScreenBgImage src={timerAppPreview} title={"Title"}  tag={"Bientôt disponible"}/>
            <FullScreenBgImage src={athletidAppPreview} title={"Title"}  tag={"Nouveau"}/>
            <AboutHome/>
            <div ref={bgWhite}>
                <ContactSupport/>
                <Footer/>
            </div>
        </div>
    );
};

export default MyComponent;
