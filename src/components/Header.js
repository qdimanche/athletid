import React, {useState, useEffect} from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import Navbar from "./Navbar";

const Header = (props) => {

    const [playApparitionAnimation, setPlayApparitionAnimation] = useState(false);

    useEffect(() => {
        const onPageLoad = () => {
            setPlayApparitionAnimation(true);
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);






    return (
        <div className={playApparitionAnimation ? 'h-[93vh] m-6  relative rounded-[60px] overflow-hidden duration-[1500ms] delay-[1500ms] flex' : 'h-screen relative  overflow-hidden duration-[2000ms] delay-[2000ms] flex'}>
            <Navbar/>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
            <video className={'w-full h-full object-cover '} src={props.src} autoPlay loop muted type="video/mp4" />
            <div  className={'absoluteVertical  flex flex-col justify-center items-start w-3/4  z-[3] fade-in-effect'}>
                <h1 className={'contentHeader md:mb-3 mb-4 apparition-from-top'}>{props.title}</h1>
                <p className={'mb-8 lg:w-2/4 w-full apparition-from-bottom'}>{props.subTitle}</p>
                <div className={'flex items-center space-x-4 apparition-from-bottom'}>
                    <WhiteBorderButton text={'Découvrir'}/>
                    <div className={'p-4 border-[1px] rounded-full'}>
                        <FaPlay/>
                    </div>

                </div>

            </div>
            <div className={'absolute bottom-[5%] right-[2.5rem] flex space-x-4 z-[999] apparition-from-bottom'}>
                <FaYoutube/>
                <FaFacebook/>
                <FaInstagram/>
                <FaTiktok/>
            </div>








        </div>
    );
};

export default Header;
