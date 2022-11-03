import React from 'react';
import Navbar from "../components/Nav/Navbar";
import AppFeature from "../components/Timer/AppFeature";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Header from "../components/Header";
import TimerVideo from "../assets/videos/video.mp4";
import {useInView} from "react-intersection-observer";
import useBodyColorTransition from "../components/hooks/useBodyColorTransition";
import FullScreenBgImage from "../components/FullScreenBgImage";



const Timer = () => {



    const {ref: header, inView: myHeaderIsVisible} = useInView();
    const {ref : bgWhite, inView: myBodyBgIsWhite} = useInView();




    useLocoScroll(myHeaderIsVisible);
    useBodyColorTransition(myBodyBgIsWhite);




    return (
        <>
            <Navbar/>
            <div id={'main-container'}>
                <Header ref={header} src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"}/>
                <AppFeature ref={bgWhite}/>
                <FullScreenBgImage/>
            </div>
        </>
    );
};

export default Timer;
