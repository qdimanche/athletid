import React from 'react';
import Tempo from '../../assets/images/timer-app-tempo.webp' ;

const AppFeature = React.forwardRef((props, ref) => {




    return (
        <div data-scroll data-scroll-section ref={ref}>
            <div className={'h-screen mt-20 px-[18rem]'}>
                <div className={'flex h-full items-center space-x-32'}>
                    <div className={'w-1/3 h-fit border-[6px] border-almostBlack rounded-[35px] overflow-hidden'}>
                        <img src={Tempo} className={'object-cover'} alt=""/>
                    </div>
                    <div className={'w-2/3 flex flex-col justify-center'}>
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
