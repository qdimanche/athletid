import React from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";


const Footer = (props) => {

    return (

        <div data-scroll-section data-scroll className={''}>

            <div className={'flex flex-col relative mx-10'}>

                <div className={'lg:mt-16 py-16 flex lg:px-60 justify-between space-x-12'}>
                    <div className={'flex flex-col'}>
                        <a className={'text-[1.2em] md:block hidden'} style={{textDecoration:'underline'}} href="mailto:contact@athletid.com">info@athletid.com</a>
                        <p className={'text-white/30'}>Lille<br/>France</p>
                    </div>


                    <div className={'flex flex-col lg:items-end space-y-2'}>
                        <div className={'flex space-x-4'}>
                            <FaYoutube />
                            <FaFacebook />
                            <FaInstagram/>
                            <FaTiktok/>
                        </div>
                        <p className={'text-white/30'}>Privacy Policy</p>
                    </div>

                </div>


            </div>





        </div>
    );
}

export default Footer;
