import React from 'react';
import {Link} from "react-router-dom";

const RedButton = () => {
    return (
        <Link to="/">
            <div className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-4 py-3 rounded-[30px] shadow-lg shadow-timeRed/50'}>
                Télécharger l'App
            </div>
        </Link>
    );
};

export default RedButton;
