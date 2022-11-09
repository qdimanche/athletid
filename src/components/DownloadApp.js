import React from 'react';
import DownloadAppStore from '../assets/images/downloadAppStore.png';
import DownloadPlayStore from '../assets/images/downloadPlayStore.png';

const DownloadApp = React.forwardRef((props, ref)=> {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'flex flex-col text-center items-center md:pt-10'}>
            <h3 className={'mb-10'}>Lorem ipsum dolor sit amet,<br/>
                consectetur adipis</h3>
            <div className={'flex space-x-8'}>
                <img src={DownloadPlayStore} className={'lg:w-[190px]  w-[140px]'} alt=""/>
                <img src={DownloadAppStore} className={'lg:w-[190px] w-[140px]'} alt=""/>
            </div>
        </div>
    );
})

export default DownloadApp;
