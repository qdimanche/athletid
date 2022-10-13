import React from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-preview.png";
import athletidAppPreview from "../assets/images/athletid-app-preview.png";
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer";
import {useInView} from "react-intersection-observer";
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";





const Home =  () => {



    const { ref: endOfPage, inView: myElementIsAfterMasonry } = useInView();
    const { ref : fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();


    useLocoScroll();




    if (myElementIsAfterMasonry) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.transitionDuration = '1000ms';
    }else  {
        document.body.style.backgroundColor = "#313539";
        document.body.style.color = "white";
    }








    return (




        <>
            <Navbar classNameNav={'animation-direction-reverse duration-1000 flex fixed justify-between z-[999] w-screen py-[60px] px-[75px]' } classNameLinksWayUp={'duration-1000 animation-direction-reverse mt-0' } />
            <div id={'main-container'}  >
                <Header src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"} />
                <FullScreenBgImage src={timerAppPreview}  title={"Title"}  tag={"Bientôt disponible"} />
                <FullScreenBgImage ref={fullScreenBgImg2} src={athletidAppPreview} title={"Title"}  tag={"Nouveau"}/>
                <MasonryGrid previousElementIsVisible={myElementIsBeforeMasonry} nextElementIsVisible={myElementIsAfterMasonry}/>
                <ContactSupport ref={endOfPage}/>
                <Footer ref={endOfPage}/>
            </div>
        </>


    );
};

export default Home;
