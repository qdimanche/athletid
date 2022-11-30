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
import FullScreenBgImageTimer from "../components/FullScreenBgImageTimer";


const Home = () => {


    const {ref: fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
    const {ref: bgWhite, inView: myElementIsAfterMasonry} = useInView();


    useLocoScroll();


    return (
        <>
            <Navbar/>
            <div id={'main-container'}>
                <Header
                    src={HeroVideoHome}
                    title={`Donne du sens à tes entraînements avec l’univers Athletid !`}
                    subTitle={"Découvre nos solutions innovantes et améliore ton expérience sportive en créant l’environnement le plus propice à ta réussite, quel que soit ton niveau, tes objectifs et ta discipline."}
                    buttonText={"Découvrir"}/>
                <FullScreenBgImage
                    src={athletidAppPreview}
                    title={"Partage ta passion "}
                    tag={"Nouveau"}
                    link={"/socialApp"}
                />
                <FullScreenBgImageTimer
                    src={timerAppPreview}
                    title={"Ton temps est précieux"} tag={"Bientôt disponible"}
                />
                <MasonryGrid
                    previousElementIsVisible={{/*myElementIsBeforeMasonry*/}}
                    nextElementIsVisible={{/*myElementIsAfterMasonry*/}}
                    titleMasonry={"Accompagner, informer et inspirer"}
                    subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs"}
                    link={"/a-propos"}
                />
                <ContactSupport whiteButtonLink={'/Contact'}/>
                <Newsletter/>
                <Footer/>
            </div>
        </>


    );
};

export default Home;
