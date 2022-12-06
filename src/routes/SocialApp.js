import React from 'react';
import Navbar from '../components/Nav/Navbar'
import useLocoScroll from "../components/hooks/useLocoScroll";
import TimerVideo from "../assets/videos/video.mp4";
import ImgHeaderTimer from "../assets/images/img-header-timer.png"
import Header from "../components/Header";
import SocialAppFeature from "../components/SocialApp/SocialAppFeature";
import FeatureSquare from "../components/FeatureSquare";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/DownloadApp";
import Footer from '../components/Footer/Footer';

const SocialApp = () => {



/*    const header = useRef(null);


    useEffect(() => {

        if (header.current.hasAttribute('data-scroll-section-inview')){
            console.log("on le voit")
        }else {
            console.log("on ne le voit plus")
        }

        console.log(header.current)
    }, [header] )*/





/*   if (header[0].hasAttribute('data-scroll-section-inview')){
        console.log("on le voit")
    }else {
        console.log("on le voit pas")
    }

    const sectionInView = document.querySelector("[data-scroll-section-inview]");*/


    useLocoScroll();








    return (
        <>
            <Navbar animation={'fade-animation'} apparition={'apparition-from-bottom-text'}/>
            <div id={'main-container'}>
                <Header
                    src={TimerVideo}
                    title={"Le 1er réseau de partage dédié à l’entraînement et au bien-être"}
                    subTitle={"Découvre gratuitement du contenu sportif adapté à ta discipline et tes objectifs"}
                    buttonText={"Télécharger l'App"}
                    img={ImgHeaderTimer}
                />
                <SocialAppFeature
                    tagAppFeature1={"Professionnel"}
                    tagAppFeature2={"Sportif"}
                />
                <FeatureSquare
                    titleFeatureSquare={"Partage ta passion"}
                    subTitleFeatureSquare={"Du Bodybuilding au Crossfit en passant par le Yoga ou le Running, retrouve chaque discipline de l’entraînement et du bien-être ainsi que de nombreuses thématiques de conseils (nutrition, récupération, posturologie, rééducation, etc.)"}
                    titleSquare1={"Trouve ce dont tu as besoin "}
                    titleSquare2={"Découvre de nouveaux entraînements et conseils"}
                    titleSquare3={"Partage tes performances et objectifs !"}
                />
                <Testimonial
                    titleTestimonial={"Ils ont rejoins notre version BETA"}
                    subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
                />
                <DownloadApp title={"Nous avons hâte de découvrir tes entraînements et tes conseils !"}/>
                <Footer />
            </div>
        </>
    );
};

export default SocialApp;
