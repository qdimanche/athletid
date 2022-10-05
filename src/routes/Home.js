import React, {useEffect} from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import FullScreenBgImage from "../components/FullScreenBgImage";
import timerAppPreview from "../assets/images/timer-app-preview.png";
import athletidAppPreview from "../assets/images/athletid-app-preview.png";
import MasonryGrid from "../components/Masonry/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer";
import {useInView} from "react-intersection-observer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Navbar from "../components/Nav/Navbar";





const Home = () => {



    const { ref: bgWhite, inView: myElementIsChangingColor } = useInView();
    const { ref: headerNotVisible, inView: myNavbarIsChangingStyle } = useInView();




    if (myElementIsChangingColor===true) {
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
            <Navbar classNameNav={myNavbarIsChangingStyle ?'flex fixed justify-between z-[999] w-screen py-[30px] px-[75px] duration-1000' : 'animation-direction-reverse duration-1000 flex fixed justify-between z-[999] w-screen py-[60px] px-[75px]' } classNameLinksWayUp={myNavbarIsChangingStyle ?'mt-[-300%] duration-1000':'duration-1000 animation-direction-reverse mt-0'} />
            <div data-scroll-container
                 id={'main-container'}  >

                <Header src={HeroVideoHome} title={"Title 1"} subTitle={"Subtitle"} />
                <div ref={headerNotVisible}>
                    <FullScreenBgImage src={timerAppPreview} title={"Title"}  tag={"Bientôt disponible"} />
                    <FullScreenBgImage  src={athletidAppPreview} title={"Title"}  tag={"Nouveau"}/>
                    <MasonryGrid />
                    <div ref={bgWhite}>
                        <ContactSupport/>
                        <Footer/>
                    </div>
                </div>

            </div>
        </>


    );
};

export default Home;
