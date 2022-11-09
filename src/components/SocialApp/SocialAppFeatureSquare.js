import React from 'react';
import HomeImg1 from "../../assets/images/homeImg1.jpg";

const SocialAppFeatureSquare = React.forwardRef((props, ref) => {
    return (
        <div data-scroll-section data-scroll ref={ref} className={'min-h-[93vh] lg:p-8 md:pt-14 p-5'}>
            <div className={'flex flex-col items-center text-center lg:mb-16 mb-10'}>
                <h2>Lorem ipsum</h2>
                <p className={'md:w-1/2 w-2/3 mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est.</p>
            </div>
            <div className="flex lg:flex-row flex-col ">
                <div className={'grid grid-cols-2 mb-10 lg:w-2/3'}>
                    <div className={'mr-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                            <img src={HomeImg1} className={'h-full object-cover'} alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4'}>Lorem ipsum</span>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className={'ml-2.5'}>
                        <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                            <img src={HomeImg1} className={'object-cover h-full' } alt=""/>
                        </div>
                        <div className={'text-center mt-6 md:px-10'}>
                            <span className={'mb-4'}>Lorem ipsum</span>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
                <div className={'lg:w-1/3 lg:ml-5'}>
                    <div className='rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-square'>
                        <img src={HomeImg1} className={'object-cover h-full '} alt=""/>
                    </div>
                    <div className={'text-center mt-6 md:px-10'}>
                        <span className={'mb-4'}>Lorem ipsum</span>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

            </div>
        </div>
    );
})

export default SocialAppFeatureSquare;
