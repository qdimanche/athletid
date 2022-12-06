import React from 'react';
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import useLocoScroll from "../components/hooks/useLocoScroll";

const Contact = () => {

    useLocoScroll();

    return (
        <>
            <Navbar animation={false}/>
            <div id={'main-container'}>
                <ContactForm/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;