import LazyLoad from "vanilla-lazyload";
import {useEffect} from 'react';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



function useLocoScroll() {


    useEffect(() => {


        let locoScroll = null;
        const scrollEl = document.querySelector("#main-container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.2,
            reloadOnContextChange: true,
            smartphone: {
                smooth: false,
            },
            tablet: {
                smooth: false,
            }
        });

        locoScroll.on('scroll', (instance) => {

            const navbar = document.querySelectorAll('#navbar');
            const elementWayUp = document.querySelectorAll('#elementWayUp');
            const mobile = window.matchMedia("(max-width: 1024px)");

            if (instance.scroll.y > 100 && !mobile.matches && navbar[0]) {
                navbar[0].style.paddingTop = '30px';
                navbar[0].style.paddingBottom = '30px';
                for (let i = 0; i < elementWayUp.length ; i ++) {
                    elementWayUp[i].style.transform = 'translateY(-300%)';
                }
            } else if (instance.scroll.y != 0 && !mobile.matches && navbar[0]){
                navbar[0].style.paddingTop = '60px';
                navbar[0].style.paddingBottom = '60px';
                elementWayUp[0].style.marginTop = '0';
                for (let i = 0; i < elementWayUp.length ; i ++) {
                    elementWayUp[i].style.transform = 'translateY(0)';
                }
            }else if(mobile.matches && navbar[0]){
                navbar[0].style.paddingTop = '2.5rem';
                navbar[0].style.paddingBottom = '2.5rem';
                elementWayUp[0].style.marginTop = '0';
                for (let i = 0; i < elementWayUp.length ; i ++) {
                    elementWayUp[i].style.transform = 'translateY(0)';
                }
            }
        });


/*
        const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
        scrollColorElems.forEach((colorSection, i) => {
            const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
            const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

            ScrollTrigger.create({
                trigger: colorSection,
                scroller: scrollEl,
                start: "top 50%",
                onEnter: () =>
                    gsap.to("body", {
                        backgroundColor: colorSection.dataset.bgcolor,
                        color: colorSection.dataset.textcolor,
                        overwrite: "auto"
                    }),
                onLeaveBack: () =>
                    gsap.to("body", {
                        backgroundColor: prevBg,
                        color: prevText,
                        overwrite: "auto"
                    })
            });
        });
*/

        setTimeout(() => locoScroll.update(), 300);
        new ResizeObserver(() => setTimeout(() => locoScroll.update(), 300)).observe(scrollEl);

        return () => {
            if (locoScroll) locoScroll.destroy();
        }



    }, [])




}





export default useLocoScroll;