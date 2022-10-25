import React from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-screenshot.webp";
import athletidAppPreview from "../assets/images/athletid-app-screenshot.webp";
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer";
import {useInView} from "react-intersection-observer";
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";
import useBodyColorTransition from "../components/hooks/useBodyColorTransition";





const Home =  () => {




    const { ref : fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
    const { ref: bgWhite, inView: myElementIsAfterMasonry } = useInView();


    useLocoScroll();
    useBodyColorTransition(myElementIsAfterMasonry);


    return (
        <>
            <Navbar classNameLinksWayUp={'duration-1000' } />
            <div id={'main-container'}  >
                <Header src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"} />
                <FullScreenBgImage src={timerAppPreview}  title={"Title"}  tag={"Bientôt disponible"} />
                <FullScreenBgImage ref={fullScreenBgImg2} src={athletidAppPreview} title={"Title"}  tag={"Nouveau"}/>
                <MasonryGrid previousElementIsVisible={myElementIsBeforeMasonry} nextElementIsVisible={myElementIsAfterMasonry}/>
                <ContactSupport ref={bgWhite}  />
                <Footer ref={bgWhite}/>
            </div>
        </>


    );
};

export default Home;
