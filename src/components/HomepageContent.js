import React from 'react';
import {Link} from "react-router-dom";
import AppShowcase from "../assets/videos/appShowcase.mp4";
import HomeImg1 from '../assets/images/homeImg1.jpg';
import HomeImg2 from '../assets/images/homeImg2.jpg';
import AppShowcase02 from '../assets/videos/appShowcase02.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import {FaPlus} from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";


const HomepageContent = () => {

    return (
        <div className={'mx-20 containerScroll'}>
            <div className={'grid md:grid-cols-2 gap-6 min-h-screen  py-8 panel orange'}>
                <div className={'relative overflow-hidden rounded-[30px]'} id={'hover-target'}>
                    <HoverVideoPlayer
                        className="player-wrapper"
                        hoverTarget={() => document.getElementById("hover-target")}
                        videoSrc={AppShowcase}
                        sizingMode="container"
                        loadingOverlay={
                            <div className="loading-overlay">
                                <div className="loading-spinner" />
                            </div>
                        }
                    />
                    <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                        <h2 className={'mb-3'}>Lorem ipsum <br/>
                            dolor sit amet</h2>
                    </div>
                    <Link to="/">
                        <div className={'absolute lg:bottom-[40px] lg:right-[40px] bottom-[20px] right-[20px] border-[2px] rounded-full p-3'}>
                            <FaPlus/>
                        </div>
                    </Link>

                </div>
                <div className={'grid grid-cols-1 grid-rows-2 gap-6'}>
                    <div className={'relative bg-cover rounded-[30px]'} style={{backgroundImage: `url(${HomeImg1})`}}>
                        <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                            <h2 className={'mb-3'}>Lorem ipsum <br/>
                                dolor sit amet</h2>
                        </div>
                        <Link to="/">
                            <div className={'absolute lg:bottom-[40px] lg:right-[40px] bottom-[20px] right-[20px] border-[2px] rounded-full p-3'}>
                                <FaPlus/>
                            </div>
                        </Link>
                    </div>
                    <div className={'relative'}>
                        <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 rounded-[30px]"}></div>
                        <div className={'bg-cover rounded-[30px] w-full h-full object-cover'} style={{backgroundImage: `url(${HomeImg2})`}}>
                            <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                                <h2 className={'mb-3'}>Lorem ipsum <br/>
                                    dolor sit amet</h2>
                            </div>
                            <Link to="/">
                                <div className={'absolute lg:bottom-[40px] lg:right-[40px] bottom-[20px] right-[20px] border-[2px] rounded-full p-3'}>
                                    <FaPlus/>
                                </div>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>

            <div className={'grid lg:grid-cols-2 gap-6 min-h-screen py-8 items-center panel red'}>
                <div className={'lg:pr-20 lg:pl-20 md:px-10 pl-0 justify-center flex flex-col '}>
                    <h2 className={'lg:mb-3 mb-6'}>Lorem ipsum <br/>
                        dolor sit amet</h2>
                    <p className={'mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className={'flex items-center space-x-10'}>
                        <DownloadButton/>
                    </div>
                </div>
                <div className={'rounded-[30px] overflow-hidden h-[90%]'}>
                    <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 "}></div>
                    <video className={'w-full h-full object-cover'} src={AppShowcase02} autoPlay loop muted />
                </div>


            </div>

            <div className={'min-h-screen py-8 panel'}>
                <Testimonial/>
            </div>

            <div className={'min-h-screen py-32 grid md:grid-cols-2 gap-16 lg:mx-28 panel blue yoyo'}>
                <div className={''}>
                    <div className={'mb-12'}>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <Faq/>

                </div>

                <div className={'bg-blackShade rounded-[30px] h-fit'}>
                    <ContactForm/>
                </div>




            </div>

        </div>
    );
};

export default HomepageContent;
