import React, {useRef} from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay, FaLinkedin} from "react-icons/fa";
import WhiteBorderButtonAnchor from "./Buttons/WhiteBorderButtonAnchor";
import {useInView} from "react-intersection-observer";
import Burger from "./Nav/Burger";
import DownloadPlayStore from "../assets/images/downloadPlayStore.svg";
import DownloadAppStore from "../assets/images/downloadAppStore.svg";

const Header =  (props) => {


    const { ref: headerVisible, inView: myHeaderIsVisible } = useInView({ triggerOnce: true});
    Burger(myHeaderIsVisible);


    return (
        <div>
            <div ref={headerVisible}>
                <div className={'lg:h-[95vh] h-[60vh] relative overflow-hidden flex rounded-[30px] rounded-header-mobile-tablet m-4 safari-overflow-fix'}>
                    <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                    <video className={'w-full lg:block hidden h-full object-cover pointer-events-none'} src={props.src} controls={false} loop muted autoPlay playsInline type="video/mp4"/>
                    <img src={props.img} alt="" className={'lg:hidden w-full h-full object-cover pointer-events-none'}/>
                    <div style={{whiteSpace:"pre-line"}} className={'lg:mt-0 md:mt-3 absolute-vertical-center-header absolute-vertical-center-mobile-header flex flex-col justify-center md:items-start items-center  z-[3] md:p-0 px-8 md:grid md:grid-cols-2'}>
                        <div className={'2xl:ml-28 lg:ml-20 md:ml-12'}>
                            <h1 className={'md:text-left text-center text-white md:w-[80%]'}>Donne du sens à <br/> tes entraînements !</h1>
                            <p className={'mt-[10px] mb-[20px] text-white md:text-left text-center '}>{props.subTitle}</p>
                            <div className={`flex md:justify-start justify-center space-x-4 ${props.visibilityWhiteButton}`}>
                                <WhiteBorderButtonAnchor text={props.buttonText}/>
                            </div>
                            <div className={`flex items-center space-x-4 ${props.visibilityDownloadButton} apparition-from-bottom-text lg:opacity-0 xl:!mt-3`}>
                                <img src={DownloadPlayStore} className={'lg:w-[160px]  w-[140px]'} alt=""/>
                                <img src={DownloadAppStore} className={'lg:w-[160px] w-[140px]'} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={'absolute bottom-[2.5rem] right-[2.5rem] space-x-6 z-[900] text-[1.3em] md:flex hidden' }>
                        <a target={'_blank'} href="https://www.instagram.com/athletid/" ><FaInstagram size={18}/></a>
                        <a target={'_blank'} href="https://www.linkedin.com/company/athletid/" ><FaFacebook size={18}/></a>
                        <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin size={18} /></a>
                    </div>
                </div>





            </div>
        </div>

    );
}



export default Header;
