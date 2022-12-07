import React from 'react';
import HeroVideoHome from "../../assets/videos/heroVideoHome.mp4";
import ImgHeaderHome from "../../assets/images/img-header-home.png"

const AboutContent = () => {
    return (
        <div data-scroll-section className={'2xl:mt-[15rem]  mt-20  pb-20 border-b border-white/10 overflow-x-hidden'}>
            <div className={'flex lg:flex-row flex-col mx-12 lg:mx-20 lg:space-y-0 space-y-6'}>
                <div className={'lg:w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col text-left lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className={'flex lg:flex-row flex-col mx-12 lg:mx-20 lg:space-y-0 space-y-6 my-20'}>
                <div className={'lg:w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col text-left lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div
                className={'lg:h-[60vh] h-[35vh] rounded-[30px] relative overflow-hidden flex m-5 mb-0 lg:mx-20 safari-overflow-fix'}>
                <video className={'w-full h-full object-cover lg:block hidden'} src={HeroVideoHome} autoPlay loop muted playsInline type="video/mp4"/>
                <img src={ImgHeaderHome} alt="" className={'lg:hidden w-full h-full object-cover pointer-events-none'}/>
            </div>






        </div>
    );
};

export default AboutContent;