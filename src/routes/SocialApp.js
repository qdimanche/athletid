import React from 'react';
import Navbar from '../components/Nav/Navbar'
import useLocoScroll from "../components/hooks/useLocoScroll";
import TimerVideo from "../assets/videos/video.mp4";
import Header from "../components/Header";
import SocialAppFeature from "../components/SocialApp/SocialAppFeature";
import SocialAppFeatureSquare from "../components/SocialApp/SocialAppFeatureSquare";
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
            <Navbar/>
            <div id={'main-container'}>
                <Header src={TimerVideo} title={"Title 1"} subTitle={"Subtitle"} buttonText={"Télécharger l'App"} />
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
