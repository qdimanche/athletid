import React from 'react';
import DiscoverButton from "./Buttons/DiscoverButton";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";

const FullScreenBgImage = (props) => {
    return (
        <div className={'w-full h-screen  relative'}>
            <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
            <img className={'w-full h-full object-cover'} src={props.src}/>
            <div className={'absolute left-[2.5rem] top-[2.5rem] px-4 py-2 rounded-[30px] bg-white text-black text-[0.8em]'}>{props.tag}</div>
            <div className={'absoluteVertical  flex flex-col justify-center items-start w-3/4  z-[3]'}>
                <h2 className={'mb-8'}>{props.title}</h2>
                <div className={'flex items-center space-x-4'}>
                    <DiscoverButton/>
                    <WhiteBorderButton text={"Télécharger l'App"}/>

                </div>

            </div>
        </div>
    );
};

export default FullScreenBgImage;
