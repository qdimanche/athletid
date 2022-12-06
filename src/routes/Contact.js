import React from 'react';
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import NavbarWithoutAnimation from "../components/Nav/NavbarWithoutAnimation";
import useLocoScroll from "../components/hooks/useLocoScroll";

const Contact = () => {

    useLocoScroll();

    const navbar = document.getElementById("navbar");

    return (
        <>
            <NavbarWithoutAnimation animation={'unset'}/>
            <div id={'main-container'}>
                <ContactForm overridePaddingY={'!py-[30px]'}/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;