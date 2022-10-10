import React from 'react';
import BlackBorderButton from "../Buttons/BlackBorderButton";

const ContactSupport = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-scroll-section className={' mt-20 pb-20 border-b border-black/10'}>
            <div className={'flex mx-80'}>
                <div className={'w-[30%] text-left'}>
                    <span className={'text-[1.5em]'}>Lorem ipsum dolor adipiscing</span>
                </div>
                <div className={'flex flex-col text-left w-[70%] ml-8 space-y-8'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed elementum dolor. Curabitur cursus lacus id porta gravida. Suspendisse eget commodo est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <BlackBorderButton text={'Contacter le support'}/>
                </div>
            </div>

        </div>
    );
})

export default ContactSupport;
