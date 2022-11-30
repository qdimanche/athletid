import React from 'react';
import HomeImg1 from "../assets/images/homeImg1.jpg";

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
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                            <img src={HomeImg1} className={'h-full object-cover'} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4'}>{props.titleSquare1}</span>
                            <p >{props.subTitleSquare1}</p>
                        </div>
                    </div>
                    <div className={'ml-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                            <img src={HomeImg1} className={'object-cover h-full' } alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4'}>{props.titleSquare2}</span>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className={'lg:ml-5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                            <img src={HomeImg1} className={'object-cover h-full '} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4'}>{props.titleSquare3}</span>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
})

export default FeatureSquare;
