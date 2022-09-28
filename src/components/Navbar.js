import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RedButton from "./Buttons/RedButton";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../assets/images/logo-athletid.webp"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    if (click === true) {
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "visible";
    }







    return (
        <div className={'flex absolute justify-between z-[990] w-full p-[2.5rem] apparition-from-bottom'}>
            <Link to="/">
                <img src={Logo} className={'w-32'} alt=""/>
            </Link>

            <div className={'flex items-center'}>
                <ul className={click?'flex  flex-col justify-center space-y-10 items-center fixed  top-0 bottom-0 left-0 z-[3] w-full  h-screen  bg-[#313539] duration-[800ms] overflow-hidden' : 'flex justify-end items-center px-10 w-full -left-full space-x-8 ' }>
                    <li>
                        <Link to="/">À propos de nous</Link>
                    </li>
                    <li>
                        <Link to="/">Support</Link>
                    </li>
                    <li>
                        <RedButton text={'Nos Applications'}/>
                    </li>
                </ul>
                <div  className={'z-[900]'} onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
                </div>
            </div>



        </div>
    );
};

export default Navbar;
