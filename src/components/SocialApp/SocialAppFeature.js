import HomeImg1 from "../../assets/images/homeImg1.jpg";
import React from "react";
import PlusIcon from "./PlusIcon";


const SocialAppContent = React.forwardRef((props, ref) => {


    return (
        <div data-scroll-section data-scroll className={'p-8 flex items-center'}>
            <div className={'flex space-x-6' }>
                <div className={'overflow-hidden aspect-square rounded-[40px] relative w-1/2'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>
                <div className={'overflow-hidden aspect-square rounded-[40px] relative w-1/2'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>


            </div>

        </div>
    );
})

export default SocialAppContent;


