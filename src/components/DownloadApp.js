import React from 'react';
import DownloadAppStore from '../assets/images/downloadAppStore.svg';
import DownloadPlayStore from '../assets/images/downloadPlayStore.svg';

const DownloadApp = React.forwardRef((props, ref)=> {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'flex flex-col text-center items-center md:pt-10 lg:px-20 px-5'}>
            <h4 className={'mb-10'}>{props.title}</h4>
            <div className={'flex space-x-8'}>
                <img src={DownloadPlayStore} className={'lg:w-[160px]  w-[140px]'} alt=""/>
                <img src={DownloadAppStore} className={'lg:w-[160px] w-[140px]'} alt=""/>
            </div>
        </div>
    );
})

export default DownloadApp;
