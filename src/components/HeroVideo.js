import React from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";

const HeroVideo = (props) => {

    return (
        <div className={'w-full h-screen  relative'}>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
            <video className={'w-full h-full object-cover'} src={props.src} autoPlay loop muted type="video/mp4" />
            <div className={'absoluteVertical  flex flex-col justify-center items-start w-3/4  z-[3] fade-in-effect'}>
                <h1 className={'md:mb-3 mb-4 fade-in-text'}>{props.title}</h1>
                <p className={'mt-4 mb-8 lg:w-2/4 w-full'}>{props.subTitle}</p>
                <div className={'flex items-center space-x-4'}>
                    <WhiteBorderButton text={'Découvrir'}/>
                    <div className={'p-4 border-[1px] rounded-full'}>
                        <FaPlay/>
                    </div>

                </div>

            </div>


                <div className={'absolute bottom-[5%] right-[2.5rem] flex space-x-4 z-[3] fade-in-effect'}>
                    <FaYoutube/>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTiktok/>
                </div>






        </div>
    );
};

export default HeroVideo;
