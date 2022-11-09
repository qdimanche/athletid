import React, {useState} from 'react';
import MasonryImages from '../assets/images/masonry';
import {useInView} from "react-intersection-observer";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";






const MasonryGrid = (props) => {


    const { ref: animationStart, inView: myAnimationStart } = useInView();
    const { ref: animationMiddle, inView: mySectionReachMiddle } = useInView();
    const { ref: animationEnd, inView: myAnimationEnd } = useInView();



    const [loaded, setLoaded] = useState(false);


    return (
        <div data-scroll-section className={'relative m-5 pt-14'}>


            <div className={"mx-8 z-1 lg:mb-48"}>
                <div className={'text-center '}>
                    <div className={'mb-10 lg:mb-20 flex flex-col items-center'}>
                        <h2>Lorem ipsum dolor</h2>
                        <p className={'mb-8'}>Lorem ipsum dolor sit amet.</p>
                        <WhiteBorderButton text={'À propos de nous'} />
                    </div>
                </div>
            </div>

            <div  className={'flex space-x-4  absolute lg:mx-[-10%] lg:translate-y-[-12%] relative lg:h-[1250px] h-fit'}>
                <div className={
                    props.previousElementIsVisible ? 'lg:translate-y-[-15%] translate-y-0 space-y-4  w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]':
                             myAnimationStart ? 'lg:translate-y-[-15%] translate-y-0 space-y-4 w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]'
                                 : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible? 'lg:translate-y-[-30%] translate-y-0 space-y-4 w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]' : 'translate-y-0 space-y-4 w-1/2 md:w-1/3  lg:w-[12%] duration-1000 z-[800]'}
                >
                    <img className={'lazy object-cover h-[230px] lg:h-[400px] lg:w-full rounded-[30px] '}  src={MasonryImages.img1}  alt=""/>
                    <img className={'object-cover h-[270px] lg:h-[400px] lg:w-full rounded-[30px] '} src={MasonryImages.img2}  alt=""/>
                    <img className={'object-cover h-[225px] lg:w-full  rounded-[30px]'} src={MasonryImages.img3}  alt=""/>
                    <img className={'object-cover lg:h-[350px] lg:w-full rounded-[30px] '} src={MasonryImages.img4}  alt=""/>
                    <img className={'hidden lg:block object-cover h-[275px] lg:w-full rounded-[30px] ' } src={MasonryImages.img5}  alt=""/>
                </div>
                <div className={'space-y-4 translate-y-[190px] w-1/2 md:w-[33%] lg:w-[12%] h-fit'}>
                    <img className={'object-cover  h-[275px] lg:w-full rounded-[30px] ' } src={MasonryImages.img6}  alt=""/>
                    <img className={'object-cover  h-[180px] lg:h-[350px] lg:w-full rounded-[30px] '} src={MasonryImages.img7}  alt=""/>
                    <img className={'object-cover lg:h-[240px] lg:w-full  rounded-[30px] '} src={MasonryImages.img8}  alt=""/>
                </div>



                <div className={
                    props.previousElementIsVisible ? 'translate-y-[5%] lg:translate-y-[20%] space-y-4 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden':
                            myAnimationStart ? 'translate-y-[5%] space-y-4 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden'
                                    : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'translate-y-[-10%] space-y-4 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden' :'translate-y-[5%] lg:translate-y-[20%] space-y-4 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden'
                }>
                    <img className={'object-cover h-[350px] w-2/3 rounded-[30px] '}src={MasonryImages.img9} alt=""/>
                    <img className={'object-cover h-[420px] w-full rounded-[30px] '}src={MasonryImages.img10} alt=""/>
                    <img className={'object-cover h-[300px] w-full  rounded-[30px] '} src={MasonryImages.img11}  alt=""/>

                </div>
                <div className={'space-y-4 translate-y-[450px] w-[12%] lg:block hidden'}>
                    <img className={'object-cover rounded-[30px]  lg:h-[300px] '} src={MasonryImages.img12}  alt=""/>
                    <img className={'object-cover rounded-[30px]  lg:h-[360px]'} src={MasonryImages.img13}  alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'translate-y-[13%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden':
                        myAnimationStart ? 'translate-y-[-2%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'translate-y-[-17%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' :'translate-y-[13%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                } >
                    <img className={'object-contain rounded-[30px] ' } src={MasonryImages.img14}  alt=""/>
                    <img className={'object-cover h-[200px] w-full rounded-[30px] '} src={MasonryImages.img15}  alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img16}  alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img17}  alt=""/>
                </div>
                <div className={'space-y-4 translate-y-[320px] w-[20%] lg:block hidden'}>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img18} alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img19} alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'translate-y-[9%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden':
                        myAnimationStart ? 'translate-y-[-6%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'translate-y-[-21%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' :'translate-y-[9%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                }>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img20}alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img21} alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img22} alt=""/>
                    <img className={'object-contain rounded-[30px] '} src={MasonryImages.img23}  alt=""/>
                </div>


{/*                <div ref={animationStart} className={'top-[32%] lg:block hidden w-full absolute'}></div>
                <div ref={animationMiddle} className={'top-[80%] lg:block hidden w-full absolute'}></div>
                <div ref={animationEnd} className={'bottom-[5%] lg:block hidden w-full absolute'}></div>*/}

            </div>






        </div>







    );
};

export default MasonryGrid;
