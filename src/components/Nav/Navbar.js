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


    const styleNavbar = {
        padding:props.padding,
        animationDirection: props.animationDirection,
    }



    return (
        <div style={styleNavbar}  className={props.classNameNav}>
            <Link to="/">
                <div className={'flex space-x-2 apparition-from-bottom-text  delay-[1500ms]'}>
                    <img src={Logo} className={'w-8'} alt=""/>
                    <img  src={TextLogo} style={{width: "50%"}} className={props.classNameLinksWayUp}  alt=""/>
                </div>
            </Link>

            <div className={'flex items-center apparition-from-bottom-text'}>
                <ul className={'flex justify-end items-center px-10 w-full    space-x-8 ' }>
                    <li className={props.classNameLinksWayUp}>
                        <Link to="/">À propos de nous</Link>
                    </li>
                    <li className={props.classNameLinksWayUp} >
                        <Link to="/">Support</Link>
                    </li>
                    <li className={'z-[999]'}>
                        <RedButton text={'Nos Applications'}/>
                    </li>
                </ul>

                <div  className={click? 'fixed rounded-full h-[3000px] w-[3000px] top-[-250%] right-[-80%]  bg-[#313539] duration-[2000ms] ':'bg-[#313539] rounded-full top-[-250%] right-[-100%] h-0 w-0 fixed duration-[2000ms]'}>



                    <div  className={click?'fixed-center-element flex space-x-40':'hidden'}>

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
