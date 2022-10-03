import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import HamburgerMenu from "./Burger"
import Logo from "../../assets/images/logo.svg";
import TextLogo from "../../assets/images/text-logo.svg";


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrollingDownNavStyle, setScrollingDownNavStyle] = useState(false);





    if (click === true) {
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "visible";
    }




    const changeNavStyle = () => {
        if(window.scrollY >= 80 )  {
            setScrollingDownNavStyle(true);
        }else {
            setScrollingDownNavStyle(false);
        }
    }

    window.addEventListener('scroll', changeNavStyle);


    const style = {
        padding:props.padding
    }


    return (
        <div data-scroll data-scroll-sticky style={style} data-scroll-target="#main-container"  className={scrollingDownNavStyle ?'flex fixed justify-between z-[999] w-screen left-0 top-0 px-[65px] py-[30px] duration-700 ' : 'flex fixed justify-between z-[999] w-screen left-0 top-0 px-[65px] py-[60px]'}>
            <Link to="/">
                <div className={'flex space-x-2 apparition-from-bottom-text  delay-[1500ms]'}>
                    <img src={Logo} className={'w-8'} alt=""/>
                    <img  src={TextLogo} className={scrollingDownNavStyle?'w-14 disparition opacity-0': 'w-14 mt-0 duration-1000 '} alt=""/>
                </div>
            </Link>

            <div className={'flex items-center apparition-from-bottom-text'}>
                <ul className={'flex justify-end items-center px-10 w-full    space-x-8 ' }>
                    <li className={scrollingDownNavStyle?'opacity-0 disparition':''}>
                        <Link to="/">À propos de nous</Link>
                    </li>
                    <li className={scrollingDownNavStyle?'opacity-0 disparition':''}>
                        <Link to="/">Support</Link>
                    </li>
                    <li className={'z-[999]'}>
                        <RedButton text={'Nos Applications'}/>
                    </li>
                </ul>

                <div  className={click? 'fixed rounded-full bounce-click-effect   h-[3000px] w-[3000px] top-[-200%] right-[-50%]  bg-[#313539] ':'hidden'}>



                    <div  className={'fixed-center-element flex space-x-40'}>

                            <ul className={' text-left apparition-from-bottom-hamburger-menu delay-1000 '}>
                                <li className={'text-[14px] font-bold'}>
                                    <Link to="/">Contact</Link>
                                </li>
                                <li className={'text-[20px] opacity-60 mb-8'}>
                                    <Link to="/">info@athletid.com</Link>
                                </li>
                                <li className={'text-[14px] font-bold'}>
                                    <Link to="/">Nos réseaux</Link>
                                </li>
                                <li className={'text-[20px] opacity-60'}>
                                    <Link to="/">Instagram</Link>
                                </li>
                                <li className={'text-[20px] opacity-60'}>
                                    <Link to="/">TikTok</Link>
                                </li>
                                <li className={' text-[20px] opacity-60'}>
                                    <Link to="/">Facebook</Link>
                                </li>
                                <li className={' text-[20px] opacity-60'}>
                                    <Link to="/">Youtube</Link>
                                </li>
                            </ul>




                            <ul className={'text-left apparition-from-bottom-hamburger-menu delay-1000 '}>
                                <li className={'text-[14px] font-bold'}>
                                    <Link to="/">Accueil</Link>
                                </li>
                                <li className={'text-[40px] opacity-60'}>
                                    <Link to="/">Accueil</Link>
                                </li>
                                <li className={'text-[40px] opacity-60'}>
                                    <Link to="/">Nos applications</Link>
                                </li>
                                <li className={' text-[40px] opacity-60'}>
                                    <Link to="/">À propos de nous</Link>
                                </li>
                            </ul>
                    </div>







                </div>



                <div  className={'z-[900]'} onClick={handleClick}>
                    {click ? (<HamburgerMenu/>) : (<HamburgerMenu/>)}
                </div>
            </div>



        </div>
    );
};

export default Navbar;
