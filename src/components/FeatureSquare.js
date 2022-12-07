import React from 'react';
import NetworkScreen01 from "../assets/images/networkScreen01.png";
import NetworkScreen02 from "../assets/images/networkScreen02.png";
import NetworkScreen03 from "../assets/images/networkScreen03.png";


const FeatureSquare = React.forwardRef((props, ref) => {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'min-h-[93vh] lg:p-8 pt-14 p-5 md:!mx-28'}>
            <div className={'flex flex-col items-center text-center lg:mb-16 mb-10'}>
                <h2>{props.titleFeatureSquare}</h2>
                <p className={'w-full mt-3'}>{props.subTitleFeatureSquare}</p>
            </div>
            <div className="flex lg:flex-row flex-col">
                <div className={'grid lg:grid-cols-3 gap-8 mb-10'}>
                    <div className={'mr-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square bg-white'>
                            <img src={NetworkScreen01} className={'object-cover w-3/4 pt-12 mx-auto '} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4 text-xl'}>{props.titleSquare1}</span>
                        </div>
                    </div>
                    <div className={'ml-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square bg-white'>
                            <img src={NetworkScreen02} className={'object-cover w-3/4 pt-12 mx-auto '} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4 text-xl'}>{props.titleSquare2}</span>
                        </div>
                    </div>
                    <div className={'lg:ml-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square bg-white'>
                            <img src={NetworkScreen03} className={'object-cover w-3/4 pt-12 mx-auto '} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4 text-xl'}>{props.titleSquare3}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
})

export default FeatureSquare;
