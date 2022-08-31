import React from 'react';
import {Link} from "react-router-dom";

const DownloadButton = () => {
    return (
        <Link to="/">
            <div className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-4 py-3 rounded-[30px] circle-boxShadow'}>
                Télécharger l'App
            </div>
        </Link>
    );
};

export default DownloadButton;
