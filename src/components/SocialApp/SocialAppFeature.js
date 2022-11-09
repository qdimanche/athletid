import HomeImg1 from "../../assets/images/homeImg1.jpg";
import React from "react";
import PlusIcon from "./PlusIcon";


const SocialAppContent = React.forwardRef((props, ref) => {


    return (
        <div data-scroll-section data-scroll className={'lg:p-8 p-5 flex items-center'}>
            <div className={'flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-5' }>
                <div className={'overflow-hidden aspect-square rounded-[30px] lg:rounded-[40px] relative md:w-1/2 w-full'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>
                <div className={'overflow-hidden aspect-square rounded-[30px] lg:rounded-[40px] relative md:w-1/2 w-full'}>
                    <img src={HomeImg1} className={'object-cover h-full'} alt=""/>
                    <PlusIcon/>
                </div>


            </div>

        </div>
    );
})

export default SocialAppContent;


