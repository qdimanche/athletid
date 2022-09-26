import React from 'react';
import {Link} from "react-router-dom";

const DiscoverButton = () => {
    return (
        <Link to="/">
            <div className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-6 py-3 rounded-[30px] circle-boxShadow'}>
                Découvrir
            </div>
        </Link>
    );
};

export default DiscoverButton;
