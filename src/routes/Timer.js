import React from 'react';
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Header from "../components/Header";
import TimerVideo from "../assets/videos/video.mp4";
import {useInView} from "react-intersection-observer";
import useBodyColorTransition from "../components/hooks/useBodyColorTransition";
import timerAppPreview from "../assets/images/timer-app-screenshot.webp";
import FullScreenBgImage from "../components/FullScreenBgImage";

const Timer = () => {



    const {ref : bgWhite, inView: myBodyBgIsWhite} = useInView();

    useLocoScroll();
    console.log(myBodyBgIsWhite);
    useBodyColorTransition(myBodyBgIsWhite);



    return (
        <>
            <Navbar/>
            <div id={'main-container'}>
                <Header src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"}/>
                <FullScreenBgImage ref={bgWhite} src={timerAppPreview}  title={"Title"}  tag={"Bientôt disponible"} />
                <FullScreenBgImage ref={bgWhite} src={timerAppPreview}  title={"Title"}  tag={"Bientôt disponible"} />
            </div>
        </>
    );
};

export default Timer;
