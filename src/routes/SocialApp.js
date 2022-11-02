import React, {useEffect} from 'react';
import Navbar from '../components/Nav/Navbar'
import useLocoScroll from "../components/hooks/useLocoScroll";
import TimerVideo from "../assets/videos/video.mp4";
import Header from "../components/Header";
import SocialAppContent from "../components/SocialApp/SocialAppFeature";
import useBodyColorTransition from "../components/hooks/useBodyColorTransition";

const SocialApp = () => {


    useLocoScroll();
    useBodyColorTransition();


    return (
        <>
            <Navbar/>
            <div id={'main-container'}>
                <Header src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"}/>
                <SocialAppContent/>
            </div>

        </>
    );
};

export default SocialApp;
