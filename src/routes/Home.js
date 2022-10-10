import React, {useEffect} from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-preview.png";
import athletidAppPreview from "../assets/images/athletid-app-preview.png";
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer";
import {useInView} from "react-intersection-observer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Navbar from "../components/Nav/Navbar";





const Home =  () => {



    const { ref: endOfPage, inView: myElementIsAfterMasonry } = useInView();
    const { ref : fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
    const { ref: headerVisible, inView: myHeaderIsVisible } = useInView();

    console.log(myHeaderIsVisible);



    if (myElementIsAfterMasonry===true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }else  {
        document.body.style.backgroundColor = "#313539";
        document.body.style.color = "white";
    }







    useEffect(() => {
        let locoScroll = null;

        const scrollEl = document.querySelector("#main-container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.2,
        });


    }, [])








    return (




        <>
            <Navbar classNameNav={myHeaderIsVisible ?   'animation-direction-reverse duration-1000 flex fixed justify-between z-[999] w-screen py-[60px] px-[75px]' : 'flex fixed justify-between z-[999] w-screen py-[30px] px-[75px] duration-1000' } classNameLinksWayUp={myHeaderIsVisible ? 'duration-1000 animation-direction-reverse mt-0': 'mt-[-300%] duration-1000' } />
            <div data-scroll-container
                 id={'main-container'}  >
                <Header src={HeroVideoHome} title={"Title 1"} ref={headerVisible}  subTitle={"Subtitle"} />
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
