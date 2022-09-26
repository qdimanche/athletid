import React from 'react';
import {Link} from "react-router-dom";

const WhiteBorderButton = (props) => {
    return (
        <Link to="/">
            <div className={'bg-transparent transition duration-300  px-6 py-3 rounded-[30px] border-[2px] border-white'}>
                {props.text}
            </div>
        </Link>
    );
};

export default WhiteBorderButton;
