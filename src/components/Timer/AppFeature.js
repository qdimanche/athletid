import React, {useEffect, useRef, useState} from 'react';
import Tempo from '../../assets/images/timer-app-tempo.webp' ;
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

const AppFeature = React.forwardRef((props, ref) => {

    const [countTab, setCountTab] = useState(1);
    console.log(countTab);


    return (
        <div data-scroll data-scroll-section ref={ref} className={'min-h-[93vh] lg:p-8 md:pt-14 p-5'}>
            <div className={'mt-8 xl:px-[23rem] lg:px-[18rem] md:px-[10rem] px-5'}>
                <div className={'flex items-center space-x-16'}>
                    <div className={'w-1/2 h-full border-[6px] border-almostBlack rounded-[35px] overflow-hidden'}>
                        <img src={Tempo} className={'object-cover'} alt=""/>
                    </div>
                    <div className={'w-1/2 flex flex-col justify-center'}>
                        {countTab === 1 ?
                            <div>
                                <p className={'text-timeRed'}>{countTab}</p>
                                <span className={'my-3 text-xl'}>Lorem ipsum</span>:
                                <p>Lorem ipsum dolor sit <br/> amet, consectetur elit</p>
                            </div>
                            : countTab === 2 ?
                                <div>
                                    <p className={'text-timeRed'}>{countTab}</p>
                                    <span className={'my-3 text-xl'}>Lorem ipsum</span>:
                                    <p>Lorem ipsum dolor sit <br/> amet, consectetur elit</p>
                                </div> :
                                <div>
                                    <p className={'text-timeRed'}>{countTab}</p>
                                    <span className={'my-3 text-xl'}>Lorem ipsum</span>:
                                    <p>Lorem ipsum dolor sit <br/> amet, consectetur elit</p>
                                </div>

                        }
                        <div className={'flex space-x-6'}>
                            <div onClick={() => countTab > 1 ? setCountTab(countTab - 1) : setCountTab(countTab)}
                                 className={'border border-white p-[8px] w-[3rem] h-[3rem] rounded-full flex justify-center items-center cursor-pointer'}>
                                <BsChevronLeft className={''}/>
                            </div>
                            <div onClick={() => countTab < 3 ? setCountTab(countTab + 1) : setCountTab(countTab) }
                                 className={'border border-white p-[8px] w-[3rem] h-[3rem] rounded-full flex justify-center items-center cursor-pointer'}>
                                <BsChevronRight className={''}/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
});

export default AppFeature;
