import React from 'react';
import Navbar from '../components/Nav/Navbar'
import useLocoScroll from "../components/hooks/useLocoScroll";
import TimerVideo from "../assets/videos/video.mp4";
import Header from "../components/Header";
import SocialAppFeature from "../components/SocialApp/SocialAppFeature";
import SocialAppFeatureSquare from "../components/SocialApp/SocialAppFeatureSquare";
import useBodyColorTransition from "../components/hooks/useBodyColorTransition";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/DownloadApp";
import Footer from '../components/Footer';

const SocialApp = () => {




    useLocoScroll();
    useBodyColorTransition();




    return (
        <>
            <Navbar/>
            <div id={'main-container'}>
                <Header src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"} />
                <SocialAppFeature />
                <SocialAppFeatureSquare />
                <Testimonial/>
                <DownloadApp />
                <Footer />
            </div>
        </>
    );
};

export default SocialApp;
