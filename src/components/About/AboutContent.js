import React from 'react';
import HeroVideoHome from "../../assets/videos/heroVideoHome.mp4";
import ImgHeaderHome from "../../assets/images/img-header-home.png"

const AboutContent = () => {
    return (
        <div data-scroll-section className={'2xl:mt-[15rem]  lg:!m-8  border-b border-white/10 overflow-x-hidden m-4 mb-16'}>
            <div className={'flex lg:flex-row flex-col lg:space-y-0 space-y-6'}>
                <div className={'lg:w-[30%] md:text-left text-center' }>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col md:text-left text-center  lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className={'flex lg:flex-row flex-col lg:space-y-0 space-y-6 my-16'}>
                <div className={'lg:w-[30%] md:text-left text-center' }>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col md:text-left text-center  lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div
                className={'lg:h-[60vh] h-[35vh] rounded-[30px] relative overflow-hidden flex mb-0  safari-overflow-fix'}>
                <video className={'w-full h-full object-cover lg:block hidden'} src={HeroVideoHome} autoPlay loop muted playsInline type="video/mp4"/>
                <img src={ImgHeaderHome} alt="" className={'lg:hidden w-full h-full object-cover pointer-events-none'}/>
            </div>






        </div>
    );
};

export default AboutContent;