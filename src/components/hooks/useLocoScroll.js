import {useEffect} from 'react';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

function useLocoScroll(props) {


    useEffect(() => {


        let locoScroll = null;
        const scrollEl = document.querySelector("#main-container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.2,
        });


        locoScroll.on('scroll', (instance) => {

            const navbar = document.querySelectorAll('#navbar');
            const elementWayUp = document.querySelectorAll('#elementWayUp');

            if (instance.scroll.y > 100) {
                navbar[0].style.paddingTop = '30px';
                navbar[0].style.paddingBottom = '30px';
                for (let i = 0; i < elementWayUp.length ; i ++) {
                    elementWayUp[i].style.transform = 'translateY(-300%)';
                }

            } else {
                navbar[0].style.paddingTop = '65px';
                navbar[0].style.paddingBottom = '65px';
                elementWayUp[0].style.marginTop = '0';
                for (let i = 0; i < elementWayUp.length ; i ++) {
                    elementWayUp[i].style.transform = 'translateY(0)';
                }
            }
        });


    }, [])


}

export default useLocoScroll;
