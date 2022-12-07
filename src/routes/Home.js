import React from 'react';
import Header from "../components/Header";
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import ImgHeaderHome from "../assets/images/img-header-home.png"
import timerAppPreview from "../assets/images/timer-app-screenshot.webp";
import athletidAppPreview from "../assets/images/athletid-app-screenshot.webp";
import MasonryGrid from "../components/MasonryGrid";
import ContactSupport from "../components/Contact/ContactSupport";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Newsletter from "../components/Footer/Newsletter";

const FullScreenBgImage = React.lazy(() => import("../components/FullScreenBgImage"));

const Home = () => {


/*    const {ref: fullScreenBgImg2, inView: myElementIsBeforeMasonry} = useInView();
    const {ref: bgWhite, inView: myElementIsAfterMasonry} = useInView();*/

    useLocoScroll();


    return (
        <>
            <Navbar animation={'fade-animation'}/>
            <div id={'main-container'}>
                <Header
                    src={HeroVideoHome}
                    title={`Donne du sens à tes entraînements !`}
                    subTitle={"Découvre nos solutions innovantes et améliore ton expérience sportive en créant l’environnement le plus propice à ta réussite, quel que soit ton niveau, tes objectifs et ta discipline."}
                    buttonText={"Découvrir"}
                    img={ImgHeaderHome}
                    link={"#networkHeader"}
                    visibilityWhiteButton={'flex'}
                    visibilityDownloadButton={'hidden'}
                />
                <FullScreenBgImage
                    src={athletidAppPreview}
                    title={"Partage ta \n passion !"}
                    tag={"Nouveau"}
                    link={"/network"}
                    idSection={"networkHeader"}
                />
                <FullScreenBgImage
                    src={timerAppPreview}
                    title={"Ton temps est \n précieux !"} tag={"Bientôt disponible"} button={false}
                />
                <MasonryGrid
                    titleMasonry={"Accompagner, informer et inspirer"}
                    subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs"}
                    link={"/a-propos"}
                />
                <ContactSupport whiteButtonLink={'/contact'}/>
                <Newsletter/>
                <Footer/>
            </div>
        </>


    );
};

export default Home;
