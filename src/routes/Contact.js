import React from 'react';
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";

const Contact = () => {

    return (
        <>
            <Navbar />
            <div id={'main-container'}>
                <ContactForm/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;