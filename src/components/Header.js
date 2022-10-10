import React, {useState, useEffect} from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";

const Header =  React.forwardRef((props,ref) => {

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
        <div data-scroll-section ref={ref} className={'h-[93vh] m-8  relative rounded-[60px] overflow-hidden flex mb-12'}>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
            <video className={'w-full h-full object-cover '} src={props.src} autoPlay loop muted type="video/mp4" />
            <div  className={'absolute-vertical-center  flex flex-col justify-center items-start w-3/4  z-[3] fade-in-effect'}>
                <h1 className={'contentHeader md:mb-3 mb-4 apparition-from-top'}>{props.title}</h1>
                <p className={'mb-8 lg:w-2/4 w-full apparition-from-bottom-text'}>{props.subTitle}</p>
                <div className={'flex items-center space-x-4 apparition-from-bottom-text'}>
                    <WhiteBorderButton text={'Découvrir'}/>
                    <div className={'p-4 border-[1px] rounded-full'}>
                        <FaPlay/>
                    </div>

                </div>

            </div>
            <div className={'absolute bottom-[40px] right-[40px] flex space-x-4 z-[900] apparition-from-bottom-absolute'}>
                <FaYoutube size={14}/>
                <FaFacebook size={14}/>
                <FaInstagram size={14}/>
                <FaTiktok size={14}/>
            </div>








        </div>
    );
})



export default Header;
