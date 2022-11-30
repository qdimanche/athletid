import React from 'react';
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import RedButton from "./Buttons/RedButton";
import {useInView} from "react-intersection-observer";

const FullScreenBgImage = (props) => {



        const { ref: sectionAnimation, inView: mySectionHasAnimations } = useInView({ triggerOnce: true, threshold: 0.02});

        return (
            <div data-scroll-section >
                <div ref={sectionAnimation} className={mySectionHasAnimations?'lg:duration-[2000ms] lg:delay-[1000ms] lg:opacity-1 h-[60vh] lg:h-[93vh] lg:rounded-[60px] rounded-[30px] overflow-hidden relative lg:m-8 m-5 translate-y-0':'lg:opacity-0 h-[93vh] lg:rounded-[60px] rounded-[30px] overflow-hidden relative m-5 lg:m-8 lg:translate-y-[10%]'}>
                    <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                    <img className={mySectionHasAnimations?'object-cover h-full object-custom-top-position animation-zoom-in w-full':'h-full object-cover object-custom-top-position'} alt={''} src={props.src}/>
                    <div className={'lg:absolute-vertical-center absolute-vertical-center-mobile  flex flex-col justify-center items-start w-3/4  z-[3]'}>
                        <div className={'px-4 py-1 rounded-[30px] bg-white text-black mb-8 text-[0.9em]'}>{props.tag}</div>
                        <h2 className={'mb-8 fade-in-effect'}>{props.title}</h2>
                        <div className={'flex items-center space-x-4'}>
                            <RedButton text={"Télécharger l'App"} link={props.link}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

export default FullScreenBgImage;
