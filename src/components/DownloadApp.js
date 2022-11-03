import React from 'react';
import DownloadAppStore from '../assets/images/downloadAppStore.png';
import DownloadPlayStore from '../assets/images/downloadPlayStore.png';

const DownloadApp = React.forwardRef((props, ref)=> {
    return (
        <div data-scroll-section ref={ref} className={'flex flex-col text-center items-center '}>
            <h3 className={'mb-12'}>Lorem ipsum dolor sit amet,<br/>
                consectetur adipis</h3>
            <div className={'flex space-x-8'}>
                <img src={DownloadPlayStore} className={'w-[190px]'} alt=""/>
                <img src={DownloadAppStore} className={'w-[190px]'} alt=""/>
            </div>
        </div>
    );
})

export default DownloadApp;
