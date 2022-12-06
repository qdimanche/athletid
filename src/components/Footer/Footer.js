import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";


const Footer = (props) => {

    return (

        <div data-scroll-section data-scroll className={''}>

            <div className={'flex flex-col relative lg:mt-0 mt-0  lg:w-full md:w-1/2 w-3/4 mx-auto '}>

                <div className={'lg:mt-12  pb-16 flex lg:flex-row flex-col lg:px-20 justify-between lg:items-start items-center'}>
                    <div className={'flex lg:flex-col flex-row lg:order-1 order-5 mt-1 lg:mt-0'}>
                        <a className={'text-[1.2em] lg:block hidden'} style={{textDecoration: 'underline'}}
                           href="mailto:contact@athletid.com">contact@athletid.com</a>
                        <p className={'text-white/30 !mr-[20px] md:mr-0'}>Lille</p>
                        <p className={'text-white/30'}>France</p>
                    </div>

                    <div className={'flex text-white/30 lg:space-x-[30px] order-1 md:mb-0 mb-3 flex-col'}>

                        <div className={'w-full grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 space-x-0'}>
                            <Link  to={"/"}>Accueil</Link>
                            <Link  to={"/socialApp"}>Network</Link>
                            <Link to={"/a-propos"}>À propos</Link>
                            <Link to={"/contact"}>Contact</Link>
                        </div>
                        <div className={'w-full md:space-x-0 space-x-[30px]'}>
                            {/*                        <Link to={"/timer"}>Timer</Link>*/}

                        </div>
                    </div>


                    <div className={'flex flex-col lg:items-start lg:space-y-0 md:space-y-3 items-center order-2'}>
                        <div className={'flex space-x-4 !text-[1.2em] lg:order-1 order-5'}>
                            <a target={'_blank'} href="https://www.instagram.com/athletid/" className={"lg:mb-0 mb-2"}><FaInstagram size={18}/></a>
                            <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"><FaFacebook
                                size={18}/></a>
                            <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin size={18}/></a>
                        </div>
                        <div className={'lg:space-x-0 space-x-[30px] space-y-0 lg:space-y-2 flex lg:flex-col lg:order-2 flex-row lg:!mb-3 !mb-10 '}>
                            <Link className={'text-white/30 lg:!mt-4'} to={"/"}>Politique de confidentialité</Link>
                            <Link className={'text-white/30'} to={"/"}>CGV/GU</Link>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default Footer;
