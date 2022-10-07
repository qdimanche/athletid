import React, {useEffect, useState} from 'react';
import MasonryImages from '../assets/images/masonry';
import {useInView} from "react-intersection-observer";
import WhiteBorderButton from "./Buttons/WhiteBorderButton";
import { LazyLoadImage } from "react-lazy-load-image-component";



const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
}





const MasonryGrid = (props) => {


    const { ref: animationStart, inView: myAnimationStart } = useInView();
    const { ref: animationMiddle, inView: mySectionReachMiddle } = useInView();
    const { ref: animationEnd, inView: myAnimationEnd } = useInView();


    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }

            })
        }, config);


        console.log(document.querySelectorAll("[data-src]"))

        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });

        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            })
        }

    })

    function loadImages(image) {
        image.src = image.dataset.src;
    }













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
                    <img className={loaded ? 'object-cover h-[400px] w-full rounded-[30px] loaded': 'object-cover h-[400px] w-full rounded-[30px] loading'}  data-src={MasonryImages.img1} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[400px] w-full rounded-[30px] loaded' : 'object-cover h-[400px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img2} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[225px] w-full  rounded-[30px] loaded': 'object-cover h-[225px] w-full  rounded-[30px] loading'} src={''} data-src={MasonryImages.img3} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[350px] w-full rounded-[30px] loaded': 'object-cover h-[350px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img4} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[275px] w-full rounded-[30px] loaded' : 'object-cover h-[275px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img5} onLoad={() => setLoaded(true)} alt=""/>
                </div>
                <div className={'space-y-4 mt-[190px] w-[12%]'}>
                    <img className={loaded ? 'object-cover h-[275px] w-full rounded-[30px] loaded' : 'object-cover h-[275px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img6} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[350px] w-full rounded-[30px] loaded' : 'object-cover h-[350px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img7} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[240px] w-full  rounded-[30px] loaded' :'object-cover h-[240px] w-full  rounded-[30px] loading'} src={''} data-src={MasonryImages.img8} onLoad={() => setLoaded(true)} alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'mt-[20%] space-y-4 w-[12%] duration-1000 z-[800]':
                            myAnimationStart ? 'mt-[5%] space-y-4 w-[12%] duration-1000 z-[800]'
                                    : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-10%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[20%] space-y-4 w-[12%] duration-1000 z-[800]'
                }>
                    <img className={loaded ? 'object-cover h-[350px] w-2/3 rounded-[30px] loaded': 'object-cover h-[350px] w-2/3 rounded-[30px] loading'} src={''} data-src={MasonryImages.img9} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[420px] w-full rounded-[30px] loaded': 'object-cover h-[420px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img10} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[300px] w-full  rounded-[30px] loaded' : 'object-cover h-[300px] w-full  rounded-[30px] loading'} src={''} data-src={MasonryImages.img11} onLoad={() => setLoaded(true)} alt=""/>

                </div>
                <div className={'space-y-4 mt-[400px] w-[12%]'}>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img12} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img13} onLoad={() => setLoaded(true)} alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'mt-[13%] space-y-4 w-[12%] duration-1000 z-[800]':
                        myAnimationStart ? 'mt-[-2%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-17%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[13%] space-y-4 w-[12%] duration-1000 z-[800]'
                } >
                    <img className={loaded ? 'object-contain rounded-[30px] loaded' : 'object-contain rounded-[30px] loading '} src={''} data-src={MasonryImages.img14} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-cover h-[200px] w-full rounded-[30px] loaded' : 'object-cover h-[200px] w-full rounded-[30px] loading'} src={''} data-src={MasonryImages.img15} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img16} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img17} onLoad={() => setLoaded(true)} alt=""/>
                </div>
                <div className={'space-y-4 mt-[320px] w-[20%]'}>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded':'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img18} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img19} onLoad={() => setLoaded(true)} alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'mt-[9%] space-y-4 w-[12%] duration-1000 z-[800]':
                        myAnimationStart ? 'mt-[-6%] space-y-4 w-[12%] duration-1000 z-[800]'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible  ? 'mt-[-21%] space-y-4 w-[12%] duration-1000 z-[800]' :'mt-[9%] space-y-4 w-[12%] duration-1000 z-[800]'
                }>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded' : 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img20} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded' : 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img21} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded': 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img22} onLoad={() => setLoaded(true)} alt=""/>
                    <img className={loaded ? 'object-contain rounded-[30px] loaded' : 'object-contain rounded-[30px] loading'} src={''} data-src={MasonryImages.img23} onLoad={() => setLoaded(true)} alt=""/>
                </div>


                <div ref={animationStart} className={'top-[32%] w-full absolute'}></div>
                <div ref={animationMiddle} className={'top-[80%] w-full absolute'}></div>
                <div ref={animationEnd} className={'bottom-[5%] w-full absolute'}></div>

            </div>






        </div>







    );
};

export default MasonryGrid;