import React from 'react';
import HeaderHome from "../components/HeaderHome";
import HeroVideoHome from "../assets/videos/testhome4.mp4";
import ImgHeaderHome from "../assets/images/img-header-home.png"
import timerAppPreview from "../assets/images/timer-screen1-dec-2022.png";
import athletidAppPreview from "../assets/images/athletid-screen-home-1-dec-2022.png"
import athletidAppPreview2 from "../assets/images/athletid-screen-home-2-dec-2022.png";
import SnVideo from "../assets/videos/sn-video.mp4"
import TimerVideo from "../assets/videos/timer-video.mp4"
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import Newsletter from "../components/Footer/Newsletter";
import FullScreenBgImage from "../components/FullScreenBgImage";

const Home = () => {


    /*    const {ref: fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
        const {ref: bgWhite, inView: myElementIsAfterMasonry} = useInView();*/


    return (
        <>
            <Navbar apparition={'apparition-from-bottom-text'} playAnimation={true}/>
            <HeaderHome
                src={HeroVideoHome}
                subTitle={"Découvre nos solutions innovantes et améliore ton expérience sportive en créant l’environnement le plus propice à ta réussite, quel que soit ton niveau, tes objectifs et ta discipline."}
                buttonText={"Découvrir"}
                img={ImgHeaderHome}
                link={"/network"}
                visibilityWhiteButton={'flex'}
                visibilityDownloadButton={'hidden'}
            />
            <FullScreenBgImage
                src={athletidAppPreview}
                title={"Partage ta \n passion !"}
                subtitle={"Enregistre tes séances et partage ta vie de sportif avec une communauté qui te ressemble. Un lieu inspirant, accessible à tous, empreint de valeurs sportives, avec un but commun : atteindre ensemble nos objectifs !"}
                tag={"Nouveau"}
                link={"/network"}
                idSection={"networkHeader"}
                videoSource={SnVideo}
            />
            <FullScreenBgImage
                src={timerAppPreview}
                title={"Ton temps \n est précieux !"} tag={"Bientôt disponible"} button={false}
                subtitle={"Paramètre ton entraînement et laisse toi guider. Enchaîne tes exercices l’esprit libre et respecte chaque seconde pour te rapprocher un peu plus de ton objectif."}
                link={"/network"}
                videoSource={TimerVideo}
            />
            <MasonryGrid
                titleMasonry={"Accompagner. \n Informer. Inspirer."}
                subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs"}
                link={"/a-propos"}
            />
            <ContactSupport src={athletidAppPreview2}
                            title={"Ton temps est précieux !"} tag={"Bientôt disponible"}/>
            <Newsletter/>
            <Footer/>
        </>


    );
};

export default Home;
