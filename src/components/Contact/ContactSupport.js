import React from 'react';

const ContactSupport = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-scroll-section className={'xl:mt-24 mt-20  pb-20 border-b border-white/10'}>
            <div className={'flex lg:flex-row flex-col mx-12 lg:mx-60 lg:space-y-0 space-y-6'}>
                <div className={'lg:w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Ton avis est important</span>
                </div>
                <div className={'flex flex-col text-left lg:w-[70%] lg:ml-8 space-y-8'}>
                    <p>Dans le but de répondre au mieux à tes besoins, n’hésites pas à nous faire tes suggestions d’améliorations pour nos solutions. Nous essayerons d’y répondre au mieux.</p>
                    <a className={'bg-transparent transition duration-300 px-3 md:px-6 py-2 rounded-[30px] border-[1px] border-white w-fit'} href={'mailto:contact@athletid.com'}>Nous contacter</a>
                </div>
            </div>
        </div>
    );
})

export default ContactSupport;
