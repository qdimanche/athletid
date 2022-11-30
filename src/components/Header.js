import React, {useRef} from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay, FaLinkedin} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import {useInView} from "react-intersection-observer";
import Burger from "./Nav/Burger";

const Header =  (props) => {


    const { ref: headerVisible, inView: myHeaderIsVisible } = useInView({ triggerOnce: true});
    Burger(myHeaderIsVisible);

    const video = document.querySelector('.video')

    setTimeout(() => {
        video.play()
    }, 0)

    return (
        <div data-scroll-section>
            <div ref={headerVisible} data-scroll>
                <div className={'h-[60vh] lg:h-[93vh] relative overflow-hidden flex rounded-header-effect-desktop rounded-header-mobile-tablet m-5 mb-0 lg:m-0 safari-overflow-fix'}>
                    <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                    <video className={'w-full h-full object-cover pointer-events-none'} src={props.src} controls={false} loop muted autoPlay playsInline type="video/mp4"/>
                    <div  className={'lg:mt-0 md:mt-3 absolute-vertical-center-mobile absolute-vertical-center-mobile-header flex flex-col justify-center md:items-start items-center xl:w-[35%] lg:w-[50%] md:w-[55%]  z-[3]'}>
                        <h1 className={'lg:mb-[10px] xl:mb-6 mb-4 apparition-from-top lg:opacity-0 md:text-left text-center'}>{props.title}</h1>
                        <p className={'mb-[30px] w-full  apparition-from-bottom-text lg:opacity-0 hidden md:block'}>{props.subTitle}</p>
                        <div className={'flex items-center space-x-4 apparition-from-bottom-text lg:opacity-0 xl:!mt-3'}>
                            <WhiteBorderButton text={props.buttonText}/>
                        </div>
                    </div>
                    <div className={'absolute bottom-[1.75rem] lg:right-[2.5rem] right-[1.75rem] space-x-6 z-[900] apparition-from-bottom-absolute lg:opacity-0 text-[1.3em] hidden md:flex' }>
                        <a class target={'_blank'} href="https://www.instagram.com/athletid/" ><FaInstagram size={18}/></a>
                        <a class target={'_blank'} href="https://www.linkedin.com/company/athletid/" ><FaFacebook size={18}/></a>
                        <a class target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin size={18} /></a>
                    </div>
                </div>





            </div>
        </div>

    );
}



export default Header;
