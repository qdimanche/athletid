import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const RedButton = (props) => {

    return (
        <Link to={`${props.link}`}>
            <div
                className={'bg-timeRed hover:bg-timeRedHover transition duration-300 px-3 md:px-6 py-2 rounded-[30px] circle-boxShadow'}
            >
                {props.text}
            </div>
        </Link>
    );
};

export default RedButton;
