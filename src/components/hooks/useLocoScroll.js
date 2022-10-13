import React, {useEffect} from 'react';
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


    }, [])


}

export default useLocoScroll;
