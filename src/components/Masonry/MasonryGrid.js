import React, {useEffect} from 'react';
import Image1 from '../../assets/images/masonry/pexels-allan-mas-5384013.webp';
import {useInView} from "react-intersection-observer";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
import BlackBorderButton from "../Buttons/BlackBorderButton";


const MasonryGrid = (props) => {


    const { ref: animationStart, inView: myAnimationStart } = useInView();
    const { ref: animationMiddle, inView: mySectionReachMiddle } = useInView();
    const { ref: animationEnd, inView: myAnimationEnd } = useInView();








    return (
        <div className={'relative mt-40'}>


            <div className={"mx-8 z-1"}>
                <div className={'text-center '}>
                    <div className={'mb-20 flex flex-col items-center'}>
                        <h2>Lorem ipsum dolor</h2>
                        <p className={'mb-8'}>Lorem ipsum dolor sit amet.</p>
                        <WhiteBorderButton text={'À propos de nous'} />
                    </div>
                </div>
            </div>

            <div  className={'flex space-x-4  absolute mx-[-10%] mt-[-12%] h-full relative'}>
                <div className={
                    props.previousElementIsVisible ? 'mt-[-30%] space-y-4 w-[12%] duration-1000 z-[800]':
                             myAnimationStart ? 'mt-[-15%] space-y-4 w-[12%] duration-1000 z-[800]'
                                 : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible? 'mt-[-30%] space-y-4 w-[12%] duration-1000 z-[800]' : 'mt-0 space-y-4 w-[12%] duration-1000 z-[800]'}
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
                    props.previousElementIsVisible ? 'mt-[20%] space-y-4 w-[12%] duration-1000 z-[800]':
                            myAnimationStart ? 'mt-[5%] space-y-4 w-[12%] duration-1000 z-[800]'
                                    : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-10%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[20%] space-y-4 w-[12%] duration-1000 z-[800]'
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
                    props.previousElementIsVisible ? 'mt-[13%] space-y-4 w-[12%] duration-1000 z-[800]':
                        myAnimationStart ? 'mt-[-2%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-17%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[13%] space-y-4 w-[12%] duration-1000 z-[800]'
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
                    props.previousElementIsVisible ? 'mt-[9%] space-y-4 w-[12%] duration-1000 z-[800]':
                        myAnimationStart ? 'mt-[-6%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-21%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[9%] space-y-4 w-[12%] duration-1000 z-[800]'
                }>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                    <img className={'object-contain rounded-[30px]'} src={Image1} alt=""/>
                </div>


                <div ref={animationStart} className={'top-[32%] w-full absolute'}></div>
                <div ref={animationMiddle} className={'top-[80%] w-full absolute'}></div>
                <div ref={animationEnd} className={'bottom-[5%] w-full absolute'}></div>

            </div>






        </div>







    );
};

export default MasonryGrid;
