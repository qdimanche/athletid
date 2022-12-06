import React from 'react';
import Navbar from '../components/Nav/Navbar'
import useLocoScroll from "../components/hooks/useLocoScroll";
import TimerVideo from "../assets/videos/video.mp4";
import Header from "../components/Header";
import AppFeature from "../components/Timer/AppFeature";
import FeatureSquare from "../components/FeatureSquare";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/DownloadApp";
import Footer from '../components/Footer/Footer';

const SocialApp = () => {

    useLocoScroll();


    return (
        <>
            <Navbar animation={'fade-animation'}/>
            <div id={'main-container'}>
                <Header src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"} buttonText={"Télécharger l'App"} />
                <AppFeature />
                <FeatureSquare />
                <Testimonial/>
                <DownloadApp />
                <Footer />
            </div>
        </>
    );
};

export default SocialApp;
