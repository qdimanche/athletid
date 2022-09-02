import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DownloadButton from "./DownloadButton";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../assets/images/logo-timer.webp"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)


    return (
        <div className={'flex flex-row md:justify-between justify-between md:h-fit items-center px-20 py-8 z-10 absolute w-full'}>
            <Link to="/">
                <img src={Logo} className={'w-14'} alt=""/>
            </Link>
            <ul className={click ? 'flex md:flex-row  flex-col md:justify-end justify-center md:space-y-0 space-y-10 md:space-x-10 items-center navbar  md:relative absolute  top-0 bottom-0 left-0 z-[-3] w-full md:h-fit h-screen md:bg-transparent bg-[#313539]': 'flex md:flex-row  flex-col justify-center md:space-y-0 space-y-10 md:space-x-10 items-center navbar  absolute -left-full bottom-0 top-0 z-[-3] md:h-fit h-screen'}>
                <li>
                    <Link to="/">À propos de nous</Link>
                </li>
                <li>
                    <Link to="/">Comment ça marche ?</Link>
                </li>
                <li>
                    <Link to="/">FAQ</Link>
                </li>
                <li>
                    <DownloadButton/>
                </li>

            </ul>
            <div className={'lg:hidden'} onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
            </div>
        </div>
    );
};

export default Navbar;
