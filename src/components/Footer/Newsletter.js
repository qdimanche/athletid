import React from 'react';

const Newsletter = () => {
    return (
        <div data-scroll-section>
            <div className={'lg:px-[25rem] md:px-[15.5rem] px-12 md:flex md:flex-col items-center text-center md:pt-14 pb-10 pt-10'}>
                <h4 className={'text-center'}>Le mail qui te fait transpirer <br/> et qui te veut du bien !</h4>
                <form action="" className={'relative mt-8 w-full'}>
                    <input type="email" placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:px-6 lg:py-3 bg-white border rounded-[45px] border-black/10 text-[#303639]'} />
                    <button type="submit" className={'absolute z-2 right-[4px] lg:right-[6px] md:top-[7px] top-[6px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
