import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import HamburgerMenu from "./Burger"
import Logo from "../../assets/images/logo.svg";
import TextLogo from "../../assets/images/text-logo.svg";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        props.animation === false ? setAnimation(false): setAnimation(true);
    },)




    click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";


    return (
        <div data-scroll data-scroll-sticky data-scroll-target="#main-container" id={animation?"navbar":""}
             className={animation?`flex fixed justify-between z-[999] w-screen lg:py-[60px] lg:px-[75px] py-[2.5rem] px-[3rem] top-0 duration-1000 apparition-from-bottom-text`:`flex fixed justify-between z-[999] w-screen lg:py-[30px] lg:px-[75px] py-[2.5rem] px-[3rem] top-0 duration-1000 `} >
            <NavLink to="/">
                <div className={`flex space-x-2 ${props.animation} z-[999]`}>
                    <img id={'test'} src={Logo} className={'lg:w-8 w-6'} alt=""/>
                    <img id={"elementWayUp"} src={TextLogo} style={{width: "50%"}} className={`duration-1000 hidden md:block`} alt=""/>
                </div>
            </NavLink>

            <div className={`flex items-center ${props.animation}`}>
                <ul className={`justify-end items-center px-10 w-full  lg:flex hidden space-x-8 ${props.animation}`}>
                    <li id={"elementWayUp"} className={`duration-1000 `}>
                        <NavLink to="/a-propos">À propos de nous</NavLink>
                    </li>
                    <li id={"elementWayUp"} className={'duration-1000'}>
                        <NavLink to="/contact">Support</NavLink>
                    </li>
                    <li className={''}>
                        <RedButton text={'Network'} link={"/network"}/>
                    </li>
                </ul>

                <div
                    className={click ? 'fixed bg-[#313539] duration-[2000ms] w-screen h-screen heightfix-ios top-0 left-0 bottom-0 overflow-hidden z-[400]' : 'bg-[#313539] invisible opacity-0 duration-[300ms] absolute w-screen h-screen top-0 left-0 bottom-0 overflow-visible'}>
                    <div
                        className={click ? 'lg:fixed-center-element absolute-vertical-center flex lg:space-x-40' : 'hidden'}>
                        <ul className={'text-left apparition-from-bottom-hamburger-menu lg:block hidden '}>
                            <li className={'text-[14px] font-bold'}>
                                <span>Contact</span>
                            </li>
                            <li className={'text-[20px] opacity-60 mb-8'}>
                                <a href={'mailto:contact@athletid.com'}>contact@athletid.com</a>
                            </li>
                            <li className={'text-[14px] font-bold'}>
                                <span>Nos réseaux</span>
                            </li>
                            <li className={'text-[20px] opacity-60'}>
                                <a target="_blank" href={'https://www.instagram.com/athletid/'}>Instagram</a>
                            </li>
                            <li className={' text-[20px] opacity-60'}>
                                <a target="_blank" href={'https://www.linkedin.com/company/athletid/'}>Linkedin</a>
                            </li>
                            <li className={' text-[20px] opacity-60'}>
                                <a target="_blank" href={'https://www.facebook.com/TimerByAthletid'}>Facebook</a>
                            </li>
                        </ul>


                        <ul className={'text-left apparition-from-bottom-hamburger-menu space-y-10'}>
                            <li className={'text-[20px] lg:text-[14px] font-bold lg:!-mb-4'}>
                                Menu
                            </li>
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <NavLink to="/">Accueil</NavLink>
                            </li>
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <NavLink to="/network">Network</NavLink>
                            </li>
{/*                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <NavLink to="/timer">Timer</NavLink>
                            </li>*/}
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <NavLink to="/a-propos">À propos</NavLink>
                            </li>
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>

                    </div>


                    <ul className={click ? 'lg:hidden flex fixed fixed-center-element-horizontal space-x-8 z-300 !text-[1.3em] opacity-1 delay-1000 duration-1000' : 'opacity-0 fixed-center-element-horizontal '}>
                        <a target={'_blank'} href="https://www.instagram.com/athletid/"><FaInstagram size={18}/></a>
                        <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"><FaFacebook
                            size={18}/></a>
                        <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin size={18}/></a>
                    </ul>
                </div>


                <div className={'z-[900]'} onClick={handleClick}>
                    {click ? (<HamburgerMenu/>) : (<HamburgerMenu/>)}
                </div>
            </div>


        </div>
    );
};

export default Navbar;
