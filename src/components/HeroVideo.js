import React from 'react';
import HeroVideoHome from "../assets/videos/heroVideoHome.mp4";
import DownloadButton from "./DownloadButton";
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay} from "react-icons/fa";

const HeroVideo = () => {
    return (
        <div className={'w-full md:h-screen h-[90vh] relative'}>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
            <video className={'w-full h-full object-cover'} src={HeroVideoHome} autoPlay loop muted type="video/mp4" />
            <div className={'absolute lg:top-[30%] md:top-[20%] top-[25%] md:left-[5rem] left-[2.5rem]  flex flex-col justify-center items-start md:w-1/2 w-3/4 z-[3]'}>
                <h1 className={'md:mb-3 mb-4'}>Lorem ipsum <br/>
                    dolor sit amet</h1>
                <p className={'mt-4 mb-8 md:w-2/4 w-3/4'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className={'flex items-center space-x-8'}>
                    <DownloadButton/>
                    <div className={'p-4 border-[2px] rounded-full'}>
                        <FaPlay/>
                    </div>

                </div>

            </div>
            <div className={'absolute bottom-[5%] right-[2.5rem] flex space-x-4 z-[3]'}>
                <FaYoutube/>
                <FaFacebook/>
                <FaInstagram/>
                <FaTiktok/>
            </div>


        </div>
    );
};

export default HeroVideo;
