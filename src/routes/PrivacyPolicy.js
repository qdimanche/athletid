import React from 'react';
import Navbar from "../components/Nav/Navbar";
import PrivacyContent from "../components/PrivacyPolicy/PrivacyContent";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar/>
            <PrivacyContent/>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;