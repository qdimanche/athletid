import React, {useEffect, useRef, useState} from 'react';
import Tempo from '../../assets/images/timer-app-tempo.webp' ;
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

const AppFeature = React.forwardRef((props, ref) => {

    const [countTab, setCountTab] = useState(1);
    console.log(countTab);


    return (
        <div data-scroll data-scroll-section ref={ref} className={' p-4'}>
            <div className={'md:my-20 my-8 lg:w-[45%]  md:w-2/3 w-full mx-auto'}>
                <div className={'flex items-center space-x-16'}>
                    <div className={'w-1/2 h-full border-[6px] border-almostBlack rounded-[35px] overflow-hidden'}>
                        <img src={Tempo} className={'object-contain'} alt=""/>
                    </div>
                    <div className={'w-1/2 flex flex-col justify-center space-y-3'}>
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
                                 className={'border border-black p-[8px] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer'}>
                                <BsChevronLeft color={'black'} className={''}/>
                            </div>
                            <div onClick={() => countTab < 3 ? setCountTab(countTab + 1) : setCountTab(countTab) }
                                 className={'border border-black p-[8px] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer'}>
                                <BsChevronRight color={'black'} className={''}/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
});

export default AppFeature;
