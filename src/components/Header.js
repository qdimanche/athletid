import React from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPlay} from "react-icons/fa";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import {useInView} from "react-intersection-observer";
import Burger from "./Nav/Burger";

const Header =  React.forwardRef((props,ref) => {


    const { ref: headerVisible, inView: myHeaderIsVisible } = useInView({ triggerOnce: true});

    Burger(myHeaderIsVisible);



    return (
        <div ref={ref} data-scroll-section data-scroll>
            <div ref={headerVisible} className={myHeaderIsVisible?'h-[93vh] relative overflow-hidden flex rounded-header-effect':' h-[93vh]  relative overflow-hidden flex'}>
                <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                <video className={'w-full h-full object-cover '} src={props.src} autoPlay loop muted type="video/mp4" />
                <div  className={'absolute-vertical-center  flex flex-col justify-center items-start w-3/4  z-[3] fade-in-effect'}>
                    <h1 className={'contentHeader md:mb-3 mb-4 opacity-0 apparition-from-top'}>{props.title}</h1>
                    <p className={'mb-8 lg:w-2/4 w-full opacity-0 apparition-from-bottom-text'}>{props.subTitle}</p>
                    <div className={'flex items-center space-x-4 opacity-0 apparition-from-bottom-text'}>
                        <WhiteBorderButton text={'Découvrir'}/>
                        <div className={'p-4 border-[1px] rounded-full'}>
                            <FaPlay/>
                        </div>

                    </div>

                </div>
                <div className={'absolute bottom-[40px] right-[40px] flex space-x-4 z-[900] opacity-0 apparition-from-bottom-absolute'}>
                    <FaYoutube size={14}/>
                    <FaFacebook size={14}/>
                    <FaInstagram size={14}/>
                    <FaTiktok size={14}/>
                </div>
            </div>





        </div>
    );
})



export default Header;
