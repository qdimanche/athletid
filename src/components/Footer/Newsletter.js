import React from 'react';

const Newsletter = () => {
    return (
        <div data-scroll data-scroll-section>
            <div className={'mx-60 lg:mx-0 md:flex md:flex-col items-center  text-center md:pt-14 pb-10 pt-10'}>
                <h3 className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <form action="" className={'relative lg:w-1/2 w-full mt-8 '}>
                    <input type="email" placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:!p-[25px] bg-white border rounded-[45px] border-black/10 text-[#303639]'} />
                    <button type="submit" className={'absolute z-2 lg:right-[18px] right-[4px] lg:top-[18px] top-[8px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-8 lg:py-3 py-2 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
