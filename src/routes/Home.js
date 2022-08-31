import React from 'react';
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import HomepageContent from "../components/HomepageContent";
import Footer from "../components/Footer";

const MyComponent = () => {
    return (
        <div>
            <Navbar/>
            <HeroVideo />
            <HomepageContent/>
            <Footer/>
        </div>
    );
};

export default MyComponent;
