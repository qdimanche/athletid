import React from 'react';

const Newsletter = () => {
    return (
        <div className={'border-t border-black/5 md:pt-12 pb-10 pt-12 '}>
            <div className={'md:w-3/4 md:mx-auto mx-4 md:flex-col items-center text-center '}>
                <h4 className={'text-center pb-8'}>Le mail qui te fait transpirer <br/> et qui te veut du bien !</h4>
                <form action="" className={'relative w-full pb-24 2xl:w-[30%] xl:w-[35%] lg:w-[50%] md:w-[60%] w-[80%] mx-auto'}>
                    <input type="email" placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:px-6 lg:py-3 bg-white border rounded-[45px] border-black/10 text-[#303639] '} />
                    <button type="submit" className={'absolute z-2 right-[4px] lg:right-[6px] lg:top-[9px] top-[7px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-[30px] circle-boxShadow text-white'}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
