import React from 'react';
import heroVideoHome from "../assets/heroVideoHome.mp4";
import RedButton from "./RedButton";

const HeroVideo = () => {
    return (
        <div className={'w-full h-screen relative'}>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 "}></div>
                <video className={'w-full h-full object-cover'} src={heroVideoHome} autoPlay loop muted />
                <div className={'absolute top-[30%] left-[3rem] flex flex-col justify-center items-start md:w-1/3 w-3/4'}>
                    <h1 className={'mb-3'}>Lorem ipsum <br/>
                        dolor sit amet</h1>
                    <p className={'mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <RedButton/>
                </div>
        </div>
    );
};

export default HeroVideo;
