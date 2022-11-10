import React from 'react';

const Newsletter = () => {
    return (
        <div data-scroll data-scroll-section>
            <div className={'lg:px-[17.5em] px-12 md:flex md:flex-col items-center text-center md:pt-14 pb-10 pt-10'}>
                <h3 className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <form action="" className={'relative md:w-2/3 w-full mt-8 '}>
                    <input type="email" placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:px-6 lg:py-3 bg-white border rounded-[45px] border-black/10 text-[#303639]'} />
                    <button type="submit" className={'absolute z-2 right-[4px] lg:right-[6px] lg:top-[10px] top-[8px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-6 lg:py-2 py-2 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
