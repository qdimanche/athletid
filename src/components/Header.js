import React from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay, FaLinkedin} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import {useInView} from "react-intersection-observer";
import Burger from "./Nav/Burger";

const Header =  (props) => {


    const { ref: headerVisible, inView: myHeaderIsVisible } = useInView({ triggerOnce: true});
    Burger(myHeaderIsVisible);

    return (
        <div data-scroll-section>
            <div ref={headerVisible} data-scroll>
                <div className={'h-[60vh] lg:h-[93vh] relative overflow-hidden flex rounded-header-effect-desktop rounded-header-mobile-tablet m-5 mb-0 lg:m-0 safari-overflow-fix'}>
                    <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                    <video className={'w-full h-full object-cover '} src={props.src} autoPlay loop muted type="video/mp4" />
                    <div  className={'lg:absolute-vertical-center absolute-vertical-center-mobile flex flex-col justify-center items-start lg:w-3/4 z-[3] fade-animation'}>
                        <h1 className={'contentHeader lg:mb-3 mb-4 apparition-from-top'}>{props.title}</h1>
                        <p className={'mb-8 lg:w-2/4 w-full  apparition-from-bottom-text'}>{props.subTitle}</p>
                        <div className={'flex items-center space-x-4 apparition-from-bottom-text'}>
                            <WhiteBorderButton text={props.buttonText}/>
                        </div>

                    </div>
                    <div className={'absolute bottom-[1.75rem] lg:right-[2.5rem] right-[1.75rem] flex space-x-4 z-[900] apparition-from-bottom-absolute fade-animation text-[1.3em]' }>
                        <a target={'_blank'} href="https://www.instagram.com/athletid/"><FaInstagram /></a>
                        <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"><FaFacebook /></a>
                        <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin /></a>
                    </div>
                </div>





            </div>
        </div>

    );
}



export default Header;
