import React from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-screenshot.webp";
import athletidAppPreview from "../assets/images/athletid-app-screenshot.webp";
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer/Footer";
import {useInView} from "react-intersection-observer";
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Newsletter from "../components/Footer/Newsletter";




const Home =  () => {




    const { ref : fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
    const { ref: bgWhite, inView: myElementIsAfterMasonry } = useInView();


    useLocoScroll();


    return (
        <>
            <Navbar/>
            <div id={'main-container'}  >
                <Header src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"} />
                <FullScreenBgImage src={timerAppPreview}  title={"Network"}  tag={"Nouveau"} whiteButtonLink={'/socialApp'}/>
                <FullScreenBgImage src={athletidAppPreview} title={"Timer"}  tag={"Bientôt disponible"} whiteButtonLink={'#'} />
                <MasonryGrid previousElementIsVisible={{/*myElementIsBeforeMasonry*/}} nextElementIsVisible={{/*myElementIsAfterMasonry*/}}/>
                <ContactSupport />
                <Newsletter/>
                <Footer/>
            </div>
        </>


    );
};

export default Home;
