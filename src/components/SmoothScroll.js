import React from 'react';
import {useEffect} from "react";
import Scrollbar from 'smooth-scrollbar';


let options = {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    continuousScrolling: false,
}

const Scroll = () => {

    useEffect(()=> {
            Scrollbar.init(document.body, options);
        }
    , [])

    return null
};

export default Scroll;
