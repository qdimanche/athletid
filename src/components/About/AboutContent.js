import React from 'react';
import HeroVideoHome from "../../assets/videos/heroVideoHome.mp4";

const AboutContent = () => {
    return (
        <div data-scroll-section className={'xl:mt-[15rem] 2xl:mt-[30rem] mt-20  pb-20 border-b border-white/10'}>
            <div className={'flex lg:flex-row flex-col mx-12 lg:mx-60 lg:space-y-0 space-y-6'}>
                <div className={'lg:w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col text-left lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className={'flex lg:flex-row flex-col mx-12 lg:mx-60 lg:space-y-0 space-y-6 lg:my-40 my-20'}>
                <div className={'lg:w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col text-left lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div
                className={'h-[60vh] lg:h-[93vh] relative overflow-hidden flex rounded-header-effect-desktop rounded-header-mobile-tablet m-5 mb-0 lg:m-0 safari-overflow-fix'}>
                <video className={'w-full h-full object-cover '} src={HeroVideoHome} autoPlay loop muted type="video/mp4"/>
            </div>






        </div>
    );
};

export default AboutContent;