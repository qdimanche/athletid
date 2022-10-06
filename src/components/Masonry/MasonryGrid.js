import React from 'react';
import Image1 from '../../assets/images/masonry/pexels-allan-mas-5384013.webp';
import {useInView} from "react-intersection-observer";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";


const MasonryGrid = () => {

    const { ref: sectionStart, inView: mySectionStart } = useInView();
    const { ref: sectionMiddle, inView: mySectionReachMiddle } = useInView();
    const { ref: sectionEnd, inView: mySectionReachEnd } = useInView();





    return (
        <div>
            <div  className={"mx-8 z-1"}>
                <div className={'text-center mt-40 relative '}>
                    <div className={'mb-20 flex flex-col items-center'}>
                        <h2>Lorem ipsum dolor</h2>
                        <p className={'mb-8'}>Lorem ipsum dolor sit amet.</p>
                        <WhiteBorderButton text={'À propos de nous'} />
                    </div>
                </div>
            </div>

            <div  className={'flex space-x-4 mx-[-10%] mt-[-12%] h-full relative'}>
                <div className=
                         {mySectionReachMiddle ? 'mt-[-20%] space-y-4 w-[12%] duration-1000 z-[800]'
                             : mySectionReachEnd ? 'mt-[-32%] space-y-4 w-[12%] duration-1000 z-[800]'
                                 : 'mt-0 space-y-4 w-[12%] duration-1000 z-[800]' }
                >
                    <img className={'object-cover h-[400px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[400px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[225px] w-full  rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[350px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[275px] w-full rounded-[30px]'} src={Image1} alt=""/>
                </div>
                <div className={'space-y-4 mt-[190px] w-[12%]'}>
                    <img className={'object-cover h-[275px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[350px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[240px] w-full  rounded-[30px]'} src={Image1} alt=""/>
                </div>
                <div className={
                    mySectionReachMiddle ? 'mt-0 space-y-4 w-[12%] duration-1000 z-[800]'
                        : mySectionReachEnd ? 'mt-[-12%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : 'mt-[20%] space-y-4 w-[12%] duration-1000 z-[800]'
                }>
                    <img className={'object-cover h-[350px] w-2/3 rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[420px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-cover h-[300px] w-full  rounded-[30px]'} src={Image1} alt=""/>

                </div>
                <div className={'space-y-4 mt-[400px] w-[12%]'}>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                </div>
                <div className={
                    mySectionReachMiddle ? 'mt-[-7%] space-y-4 w-[12%] duration-1000 z-[800]'
                        : mySectionReachEnd ? 'mt-[-19%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : 'mt-[13%] space-y-4 w-[12%] duration-1000 z-[800]'
                } >
                    <img className={'object-contain rounded-[30px] '} src={Image1} alt=""/>
                    <img className={'object-cover h-[200px] w-full rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                </div>
                <div className={'space-y-4 mt-[320px] w-[20%]'}>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                </div>
                <div className={
                    mySectionReachMiddle ? 'mt-[-11%] space-y-4 w-[12%] duration-1000 z-[800]'
                        : mySectionReachEnd ? 'mt-[-23%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : 'mt-[9%] space-y-4 w-[12%] duration-1000 z-[800]'
                }>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                </div>

                <div ref={sectionMiddle} className={'top-[30%] w-full absolute'}></div>
                <div ref={sectionEnd} className={'top-[35%] w-full h-full absolute'}></div>



            </div>



        </div>







    );
};

export default MasonryGrid;
