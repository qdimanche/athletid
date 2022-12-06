import React from 'react';

const Newsletter = () => {
    return (
        <div data-scroll-section>
            <div className={'xl:w-[35%] lg:w-[40%] md:w-[50%] w-3/4 mx-auto md:flex-col items-center text-center md:pt-14 pb-10 pt-10'}>
                <h4 className={'text-center pb-8'}>Le mail qui te fait transpirer <br/> et qui te veut du bien !</h4>
                <form action="" className={'relative w-full pb-24'}>
                    <input type="email" placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:px-6 lg:py-3 bg-white border rounded-[45px] border-black/10 text-[#303639]'} />
                    <button type="submit" className={'absolute z-2 right-[4px] lg:right-[6px] lg:top-[9px] top-[8px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
