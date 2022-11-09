import React from 'react';

const RedButton = (props) => {
    return (
        <a>
            <div className={'bg-timeRed hover:bg-timeRedHover transition duration-300  px-4 md:px-6 py-3 rounded-[30px] circle-boxShadow'}>
                {props.text}
            </div>
        </a>
    );
};

export default RedButton;
