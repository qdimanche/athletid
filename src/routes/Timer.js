import React from 'react';
import Navbar from '../components/Nav/Navbar'
import TimerVideo from "../assets/videos/video.mp4";
import TimerScreen01 from "../assets/images/timerScreen01.webp";
import TimerScreen02 from "../assets/images/timerScreen02.webp";
import TimerScreen03 from "../assets/images/timerScreen03.webp";
import HeaderHome from "../components/HeaderHome";
import AppFeature from "../components/Timer/AppFeature";
import FeatureSquare from "../components/FeatureSquare";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/DownloadApp";
import Footer from '../components/Footer/Footer';

const SocialApp = () => {

    return (
        <>
            <Navbar apparition={'apparition-from-bottom-text'} playAnimation={true}/>
            <div id={'main-container'}>
                <HeaderHome src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"} visibilityWhiteButton={'hidden'} />
                <AppFeature />
                <FeatureSquare
                    titleFeatureSquare={"Un réseau social. \n Une émulation collective."}
                    subTitleFeatureSquare={"Du Bodybuilding au Crossfit en passant par le Yoga ou le Running, retrouve chaque discipline de l’entraînement et du bien-être ainsi que de nombreuses thématiques de conseils."}
                    titleSquare1={"Trouve \n ce dont tu as besoin !"}
                    imgSquare1={TimerScreen01}
                    titleSquare2={"Découvre \n de nouveaux entraînements et conseils !"}
                    imgSquare2={TimerScreen02}
                    titleSquare3={"Partage \n tes performances et objectifs !"}
                    imgSquare3={TimerScreen03}
                />
                <Testimonial
                    titleTestimonial={"Ils ont rejoins notre \n version BETA"}
                    subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
                />
                <DownloadApp title={"Nous avons hâte de découvrir \n tes entraînements et tes conseils !"}/>
                <Footer />
            </div>
        </>
    );
};

export default SocialApp;
