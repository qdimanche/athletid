import React from 'react';
import { ReactComponent as DownloadPlayStore } from "../assets/images/downloadPlayStore.svg";
import {ReactComponent as DownloadAppStore} from "../assets/images/downloadAppStore.svg";



const DownloadApp = React.forwardRef((props, ref)=> {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'flex flex-col text-center items-center 2xl:px-32 lg:px-24 md:px-12 px-4 pb-32'}>
            <h4 style={{whiteSpace:"pre-line"}} className={'mb-10'}>{props.title}</h4>
            <div className={`flex justify-center space-x-4 !w-full`}>
                <a target={'_blank'} href="https://play.google.com/store/apps/details?id=com.athletid.athletid&gl=FR">
                    <DownloadPlayStore className={'hover:fill-white duration-300 rounded-[9px] overflow-y-hidden hover:bg-black '}/>
                </a>
                <a target={'_blank'} href="https://apps.apple.com/fr/app/athletid/id6443471192">
                    <DownloadAppStore className={'hover:fill-white duration-300 rounded-[9px] overflow-y-hidden hover:bg-black '} alt=""/>
                </a>
            </div>
        </div>
    );
})

export default DownloadApp;
