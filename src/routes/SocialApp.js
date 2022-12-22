import React from 'react';
import Navbar from '../components/Nav/Navbar'
import TimerVideo from "../assets/videos/video.mp4";
import ImgHeaderTimer from "../assets/images/img-header-timer.png"
import Header from "../components/Header";
import SocialAppFeature from "../components/SocialApp/SocialAppFeature";
import FeatureSquare from "../components/FeatureSquare";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/DownloadApp";
import Footer from '../components/Footer/Footer';
import HeaderV2 from "../components/HeaderSN";

const SocialApp = () => {

    return (
        <>
            <Navbar apparition={'apparition-from-bottom-text'} playAnimation={true}/>
            <HeaderV2
                title={"La communauté \n des sports addicts. "}
                subTitle={"Explorez l’univers Athletid, un réseau de partage dédié à l’entraînement  sportif et au bien-être. Découvre gratuitement des séances, des conseils et améliore ton expérience sportive."}
                buttonText={"Télécharger l'App"}
                img={ImgHeaderTimer}
                visibilityWhiteButton={'hidden'}
                visibilityDownloadButton={'flex'}
            />
            <SocialAppFeature
                tagAppFeature1={"Sportif"}
                titleAppFeature1={"Inspire. Progresse.\n" +
                    "Partage."}
                subtitleAppFeature1={"Tiens régulièrement ton journal d’entraînement pour suivre ton évolution et motiver tes amis à atteindre leurs objectifs. Inspire-toi de ta communauté pour apprendre chaque jour de nouveaux exercices, séances et conseils qui vont changer ta vie de sportif. "}
                tagAppFeature2={"Professionnel"}
                titleAppFeature2={"Conseille. Rencontre. Vends."}
                subtitleAppFeature2={"Mets en avant ton expertise et accrois rapidement ta notoriété auprès de ton audience. Communique et propose tes services à un grand nombre d’acheteurs potentiels."}
                tagAppFeature3={"Entreprise"}
                titleAppFeature3={"Développe. Communique. Vends. "}
                subtitleAppFeature3={"Rejoignez l’univers dédié à l’entraînement et au bien-être pour être au plus près de votre publique. Un nouveau marché s’ouvre à vous pour acquérir de nouveaux clients.\n"}
            />
            <FeatureSquare
                titleFeatureSquare={"Un réseau social. \n Une émulation collective."}
                subTitleFeatureSquare={"Du Bodybuilding au Crossfit en passant par le Yoga ou le Running, retrouve chaque discipline de l’entraînement et du bien-être ainsi que de nombreuses thématiques de conseils."}
                titleSquare1={"Trouve \n ce dont tu as besoin !"}
                titleSquare2={"Découvre \n de nouveaux entraînements et conseils !"}
                titleSquare3={"Partage \n tes performances et objectifs !"}
            />
            <Testimonial
                titleTestimonial={"Ils ont rejoins notre \n version BETA"}
                subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
            />
            <DownloadApp title={"Nous avons hâte de découvrir \n tes entraînements et tes conseils !"}/>
            <Footer/>
        </>
    );
};

export default SocialApp;
