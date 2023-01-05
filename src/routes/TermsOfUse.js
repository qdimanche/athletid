import React from 'react';
import Navbar from "../components/Nav/Navbar";
import TermsContent from "../components/TermsOfUse/TermsContent";
import Footer from "../components/Footer/Footer";

const TermsOfUse = () => {
    return (
        <div>
            <Navbar/>
            <TermsContent/>
            <Footer/>
        </div>
    );
};

export default TermsOfUse;