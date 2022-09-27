import React from 'react';
import {Link} from "react-router-dom";
import AppShowcase from "../assets/videos/appShowcase.mp4";
import ScreenshotAppShowcase01 from "../assets/images/screenshotAppShowcase-01.png";
import HomeImg1 from '../assets/images/homeImg1.jpg';
import HomeImg2 from '../assets/images/homeImg2.jpg';
import AppShowcase02 from '../assets/videos/appShowcase02.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import {FaPlus} from "react-icons/fa";
import DiscoverButton from "./Buttons/RedButton";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";


const HomepageContent = () => {

    return (
        <div className={'mx-10 containerScroll'}>
            <div className={'grid md:grid-cols-2 md:gap-6 min-h-screen items-center md:items-stretch py-8 panel orange lg:mt-6'}>
                <div className={'relative !overflow-hidden rounded-[30px] video-rounded-webkit hidden md:block'} id={'hover-target'}>
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
                        <div className={'absolute lg:bottom-[30px] lg:right-[30px] bottom-[20px] right-[20px] border-[2px] rounded-full p-1'}>
                            <FaPlus size={18}/>
                        </div>
                    </Link>

                </div>
                <div className={'grid grid-cols-1 md:grid-rows-2 grid-rows-3 gap-6 md:h-full min-h-[90vh] md:mt-0 mt-28'}>




                    <div className={'relative bg-cover rounded-[30px] md:hidden block'} style={{backgroundImage: `url(${ScreenshotAppShowcase01})`}}>
                        <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                            <h2 className={'mb-3'}>Lorem ipsum <br/>
                                dolor sit amet</h2>
                        </div>
                        <Link to="/">
                            <div className={'absolute lg:bottom-[30px] lg:right-[30px] bottom-[20px] right-[20px] border-[2px] rounded-full p-1'}>
                                <FaPlus size={18}/>
                            </div>
                        </Link>
                    </div>




                    <div className={'relative bg-cover rounded-[30px]'} style={{backgroundImage: `url(${HomeImg1})`}}>
                        <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                            <h2 className={'mb-3'}>Lorem ipsum <br/>
                                dolor sit amet</h2>
                        </div>
                        <Link to="/">
                            <div className={'absolute lg:bottom-[30px] lg:right-[30px] bottom-[20px] right-[20px] border-[2px] rounded-full p-1'}>
                                <FaPlus size={18}/>
                            </div>
                        </Link>
                    </div>


                    <div className={'relative bg-cover rounded-[30px]'} style={{backgroundImage: `url(${HomeImg2})`}}>
                        <div className={'absolute top-[20px] left-[20px] md:left-[40px]'}>
                            <h2 className={'mb-3'}>Lorem ipsum <br/>
                                dolor sit amet</h2>
                        </div>
                        <Link to="/">
                            <div className={'absolute lg:bottom-[30px] lg:right-[30px] bottom-[20px] right-[20px] border-[2px] rounded-full p-1'}>
                                <FaPlus size={18}/>
                            </div>
                        </Link>
                    </div>



                </div>
            </div>

            <div className={'grid lg:grid-cols-2 lg:gap-6 h-screen py-8 items-center panel red md:items-stretch items-center relative'}>
                <div className={'lg:pr-20 lg:pl-20 md:px-10 pl-0 justify-center flex flex-col lg:order-1 order-last lg:mt-0 -mt-6 lg:relative absolute z-30 w-2/3 lg:w-full md:top-[10%] lg:top-0 top-[12%] bottom-[10%] center-absolute'}>
                    <h2 className={'lg:mb-3 mb-6'}>Lorem ipsum <br/>
                        dolor sit amet</h2>
                    <p className={'mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className={'flex items-center space-x-10'}>
                        <DiscoverButton/>
                    </div>
                </div>
                <div className={'!rounded-[30px] relative !overflow-hidden md:h-full h-[70%] md:order-2'}>
                    <div className={"absolute !rounded-[30px] top-0 left-0 w-full h-full lg:bg-[black]/20 bg-black/60 z-10 "}></div>
                    <video className={'w-full !rounded-[30px] h-full object-cover absolute z-1'} src={AppShowcase02} autoPlay loop muted type="video/mp4" />
                </div>


            </div>

            <div className={'min-h-screen py-8 panel grid items-center'}>
                <Testimonial/>
            </div>

            <div className={'min-h-screen py-32 grid md:grid-cols-2 gap-16 lg:mx-28 '}>
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
