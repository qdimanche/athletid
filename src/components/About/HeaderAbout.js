import React from 'react';
import Avatar from '../../assets/images/person/avatar.jpeg'
import Curve from '../../assets/images/curve.png'

const HeaderAbout = () => {
    return (
        <div data-scroll-section data-scroll className={''}>
            <div className={'relative flex flex-col items-center justify-center text-left md:min-h-screen min-h-[80vh]'}>
                <h1>Bienvenue chez</h1>
                <span className={'text-[5.8em] text-[#E63D31]'}>Athletid</span>
                <img src={Curve} className={'-mt-8'} alt=""/>

                <img src={Avatar} className={'w-24 rounded-full absolute top-64 xl:left-40 md:left-14 hidden md:block'} alt=""/>
                <img src={Avatar} className={'w-24 rounded-full absolute top-56 xl:right-40 md:right-14 hidden md:block'} alt=""/>
                <img src={Avatar} className={'w-24 rounded-full absolute top-20 hidden md:block'} alt=""/>
                <img src={Avatar} className={'w-24 rounded-full absolute bottom-24 xl:left-80 md:left-44 hidden md:block'} alt=""/>
                <img src={Avatar} className={'w-24 rounded-full absolute bottom-28 xl:right-80 md:right-44 hidden md:block'} alt=""/>
            </div>
        </div>
    );
};

export default HeaderAbout;