import React from 'react';
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import HomepageContent from "../components/HomepageContent";

const MyComponent = () => {
    return (
        <div>
            <Navbar/>
            <HeroVideo />
            <HomepageContent/>
        </div>
    );
};

export default MyComponent;
