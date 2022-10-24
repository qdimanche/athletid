import React from 'react';
import {Link} from "react-router-dom";

const BlackBorderButton = (props) => {
    return (
        <Link to="/">
            <button id={'button'} className={'bg-transparent transition duration-300  px-6 py-3 rounded-[30px] border-[1px] border-black w-fit'}>
                {props.text}
            </button>
        </Link>
    );
};

export default BlackBorderButton;
