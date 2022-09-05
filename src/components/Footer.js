import React from 'react';
import {Link} from "react-router-dom";
import {FaChevronRight, FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import FooterImg from "../assets/images/footerImg.jpg";


const Footer = () => {
    return (
        <div className={'px-12 pb-16 pt-40 md:pt-48 mt-16 flex md:flex-row flex-col h-fit bg-blackShade justify-between relative'}>

            <div className={'w-3/4 px-[20px] pt-32 pb-[20px] bg-cover bg-center absolute md:-top-[25%] -top-[15%] center-absolute rounded-[50px] flex items-end justify-between '} style={{backgroundImage: `url(${FooterImg})`}}>
                <div>
                    <h2>Lorem ipsum <br/>
                        dolor sit amet</h2>
                </div>
                <div>
                    <button className={'rounded-full bg-timeRed hover:bg-timeRedHover transition duration-300 p-4  circle-boxShadow'}><FaChevronRight/></button>
                </div>

            </div>


            <div className={'md:w-1/4 w-full flex flex-col'}>
                <h2 >Timer</h2>
                <div className={'flex flex-col mt-2 mb-14'}>
                    <a href="tel:+33683288601">+33 6 83 28 86 01</a>
                    <a href="mailto:contact@athletid.com">contact@athletid.com</a>
                    <p>1 bis Rue de la Girouette</p>
                    <p>59800, Lille</p>
                </div>


                <p className={'font-bold hidden md:block'}>© 2022 Timer by Athletid. All rights reserved.</p>
            </div>
            <div className={'lg:w-3/4 w-fit w-full flex lg:flex-row flex-col lg:items-start lg:justify-end md:justify-start lg:space-y-0 md:space-y-10 relative'}>
                <div className={'flex lg:w-fit md:w-full lg:space-x-16 md:space-x-10 space-x-6 md:space-y-0'}>
                    <Link to="/"><div className={'font-semibold'}>À propos de nous</div></Link>
                    <Link to="/"><div className={'font-semibold'}>Comment ça marche ?</div></Link>
                </div>

                <div className={'flex flex-col w-fit lg:ml-16 md:mt-0 mt-6'}>
                    <p className={'font-semibold mb-2'}>S'abonner</p>
                    <form action="" className={'flex flex-col space-y-6'}>
                        <div className={'relative'}>
                            <input type="mail" name="mail" className={'!rounded-[30px] !p-[15px]'} placeholder={'Votre mail'}/>
                            <button className={'rounded-full bg-timeRed hover:bg-timeRedHover transition duration-300 p-4 absolute right-[5px] lg:top-[8px] top-[7px] circle-boxShadow'}><FaChevronRight/></button>
                        </div>

                    </form>
                </div>
                <div className={'md:absolute md:bottom-0 md:right-0 !mt-12 md:mt-0 flex space-x-4'}>
                    <FaYoutube/>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTiktok/>
                </div>
                <p className={'font-bold block md:hidden !mt-20'}>© 2022 Timer by Athletid. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
