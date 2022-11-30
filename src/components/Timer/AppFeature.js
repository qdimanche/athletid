import React from 'react';
import Tempo from '../../assets/images/timer-app-tempo.webp' ;

const AppFeature = React.forwardRef((props, ref) => {




    return (
        <div data-scroll data-scroll-section ref={ref} className={'min-h-[93vh] lg:p-8 md:pt-14 p-5'}>
            <div className={'mt-8 xl:px-[23rem] lg:px-[18rem] md:px-[10rem] px-5'}>
                <div className={'flex items-center space-x-16'}>
                    <div className={'w-1/2 h-full border-[6px] border-almostBlack rounded-[35px] overflow-hidden'}>
                        <img src={Tempo} className={'object-cover'} alt=""/>
                    </div>
                    <div className={'w-1/2 flex flex-col justify-center'}>
                        <p className={'text-timeRed'}>01</p>
                        <span className={'my-3 text-xl'}>Lorem ipsum</span>
                        <p>Lorem ipsum dolor sit <br/> amet, consectetur elit</p>
                    </div>
                </div>



            </div>

        </div>
    );
});

export default AppFeature;
