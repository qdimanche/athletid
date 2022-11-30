import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";


const Footer = (props) => {

    return (

        <div data-scroll-section data-scroll className={''}>

            <div className={'flex flex-col relative lg:mt-0 md:mt-12 mt-0 mx-10'}>

                <div className={'lg:mt-12 py-16 flex lg:px-20 justify-between'}>
                    <div className={'flex flex-col'}>
                        <a className={'text-[1.2em] md:block hidden'} style={{textDecoration: 'underline'}}
                           href="mailto:contact@athletid.com">contact@athletid.com</a>
                        <p className={'text-white/30'}>Lille<br/>France</p>
                    </div>

                    <div className={'flex lg:flex-row flex-col text-white/30 lg:space-x-[30px] lg:space-x-4 space-y-3'}>

                        <Link to={"/"}>Accueil</Link>
                        <Link to={"/socialApp"}>Network</Link>
                        <Link to={"/timer"}>Timer</Link>
                        <Link to={"/a-propos"}>À propos</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>


                    <div className={'flex flex-col lg:items-end space-y-3'}>
                        <div className={'flex space-x-4 !text-[1.2em]'}>
                            <a target={'_blank'} href="https://www.instagram.com/athletid/" className={"lg:mb-0 mb-2"}><FaInstagram size={18}/></a>
                            <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"><FaFacebook
                                size={18}/></a>
                            <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin size={18}/></a>
                        </div>
                        <Link className={'text-white/30 !mt-3'} to={"/"}>Politique de confidentialité</Link>
                        <Link className={'text-white/30'} to={"/"}>CGV/GU</Link>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default Footer;
