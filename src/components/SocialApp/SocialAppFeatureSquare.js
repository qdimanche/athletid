import React from 'react';
import HomeImg1 from "../../assets/images/homeImg1.jpg";

const SocialAppFeatureSquare = React.forwardRef((props, ref) => {
    return (
        <div data-scroll data-scroll-section ref={ref} className={'min-h-[93vh] p-8'}>
            <div className={'flex flex-col items-center text-center mb-16'}>
                <h2>Lorem ipsum</h2>
                <p className={'w-1/2 mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est.</p>
            </div>
            <div className="space-x-6 flex">
                <div className={'w-1/3'}>
                    <div className='rounded-[60px] overflow-hidden aspect-square'>
                        <img src={HomeImg1} className={'h-full object-cover'} alt=""/>
                    </div>
                    <div className={'text-center mt-6 px-10'}>
                        <span className={'mb-4'}>Lorem ipsum</span>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className={'w-1/3'}>
                    <div className='rounded-[60px] overflow-hidden aspect-square'>
                        <img src={HomeImg1} className={'object-cover h-full' } alt=""/>
                    </div>
                    <div className={'text-center mt-6 px-10'}>
                        <span className={'mb-4'}>Lorem ipsum</span>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className={'w-1/3'}>
                    <div className='rounded-[60px] overflow-hidden aspect-square'>
                        <img src={HomeImg1} className={'object-cover h-full '} alt=""/>
                    </div>
                    <div className={'text-center mt-6 px-10'}>
                        <span className={'mb-4'}>Lorem ipsum</span>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

            </div>
        </div>
    );
})

export default SocialAppFeatureSquare;
