import React, {useEffect, useState} from 'react';
import RedButton from "./Buttons/RedButton";
import {useInView} from "react-intersection-observer";
import {LazyLoadImage} from "react-lazy-load-image-component";

const FullScreenBgImage = (props) => {



        const scrollEl = document.querySelector("#main-container");
        const { ref: sectionAnimation, inView: mySectionHasAnimations } = useInView({ triggerOnce: true, threshold: 0.02});

        const [button, showButton] = useState(false);

        useEffect(() => {
            props.button === false ? showButton(false): showButton(true);
        },)

        return (
            <div data-scroll-section id={props.idSection}>
                <div ref={sectionAnimation} className={mySectionHasAnimations?'lg:duration-[2000ms] lg:opacity-1 h-[60vh] lg:h-[93vh] lg:rounded-[60px] rounded-[30px] overflow-hidden relative lg:m-8 m-5 translate-y-0':'lg:opacity-0 h-[93vh] lg:rounded-[60px] rounded-[30px] overflow-hidden relative m-5 lg:m-8 lg:translate-y-[10%]'}>
                    <div className={"absolute top-0 left-0 w-full h-full lg:bg-[black]/30 bg-[black]/50 z-[1] "}></div>
                    <div className={'absolute top-[1.75rem] left-[1.75rem] z-[9] px-4 py-1 rounded-[30px] bg-white text-black mb-8 text-[0.9em]'}>{props.tag}</div>
                    <LazyLoadImage className={mySectionHasAnimations?'object-cover h-full object-custom-top-position animation-zoom-in w-full':'h-full object-cover object-custom-top-position'} alt={''} src={props.src}/>
                    <div className={'absolute-vertical-center-tablet-desktop absolute-vertical-center-mobile  flex flex-col justify-center items-start w-3/4  z-[3]'}>
                        <h2 style={{ whiteSpace: "pre-line" }} className={'mb-8 fade-in-effect'}>{props.title}</h2>
                        <div className={button?'flex items-center space-x-4':'hidden'}>
                            <RedButton text={"Télécharger l'App"} link={props.link}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

export default FullScreenBgImage;
