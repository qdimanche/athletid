import React from 'react';
import {Link} from "react-router-dom";
import AppShowcase from "../assets/videos/appShowcase.mp4";
import HomeImg1 from '../assets/images/homeImg1.jpg';
import HomeImg2 from '../assets/images/homeImg2.jpg';
import HoverVideoPlayer from 'react-hover-video-player';
import {FaPlus} from "react-icons/fa";

const HomepageContent = () => {
    return (
        <div className={'grid grid-cols-2 gap-6 h-[80vh] px-12 py-8'}>
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
                    <div className={'absolute bottom-[40px] right-[40px] border rounded-full p-4'}>
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
                        <div className={'absolute bottom-[40px] right-[40px] border rounded-full p-4'}>
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
                            <div className={'absolute bottom-[40px] right-[40px] border rounded-full p-4'}>
                                <FaPlus/>
                            </div>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HomepageContent;
