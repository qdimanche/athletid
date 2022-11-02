import HomeImg1 from "../../assets/images/homeImg1.jpg";
import React from "react";
import PlusIcon from "./PlusIcon";


const SocialAppContent = () => {


    return (
        <div data-scroll data-scroll-section className={'min-h-[93vh] p-8'}>
            <div className={'grid grid-cols-2 space-x-4' }>
                <div className={'overflow-hidden rounded-[40px] relative'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>
                <div className={'overflow-hidden rounded-[40px] relative'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>


            </div>

        </div>
    );
};

export default SocialAppContent;


