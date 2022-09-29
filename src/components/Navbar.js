import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RedButton from "./Buttons/RedButton";
import {FaTimes} from "react-icons/fa";
import Logo from "../assets/images/logo.svg";
import TextLogo from "../assets/images/text-logo.svg";
import {ReactComponent as HamburgerMenu} from '../assets/images/icons/hamburger-menu.svg';

const Navbar = () => {
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







    return (
        <div className={scrollingDownNavStyle ?'flex fixed justify-between z-[999] w-screen left-0 top-0 px-[65px] py-[20px] duration-700 ' : 'flex fixed justify-between z-[999] w-screen left-0 top-0 px-[65px] py-[65px]'}>
            <Link to="/">
                <div className={'flex space-x-2 apparition-from-bottom  delay-[1500ms]'}>
                    <img src={Logo} className={'w-8'} alt=""/>
                    <img  src={TextLogo} className={scrollingDownNavStyle?'w-14 disparition opacity-0': 'w-14 mt-0 duration-1000 '} alt=""/>
                </div>
            </Link>

            <div className={'flex items-center apparition-from-bottom'}>
                <ul className={click?'flex  flex-col justify-center space-y-10 items-center fixed  top-0 bottom-0 left-0 z-[3] w-full  h-screen  bg-[#313539] duration-[800ms] overflow-hidden' : 'flex justify-end items-center px-10 w-full -left-full space-x-8 ' }>
                    <li className={scrollingDownNavStyle?'opacity-0 disparition':'duration-1000'}>
                        <Link to="/">À propos de nous</Link>
                    </li>
                    <li className={scrollingDownNavStyle?'opacity-0 disparition':'duration-1000'}>
                        <Link to="/">Support</Link>
                    </li>
                    <li>
                        <RedButton text={'Nos Applications'}/>
                    </li>
                </ul>
                <div  className={'z-[900]'} onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<HamburgerMenu fill={'stroke'}/>)}
                </div>
            </div>



        </div>
    );
};

export default Navbar;
