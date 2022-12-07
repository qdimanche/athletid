import React from 'react';
import useLocoScroll from "../components/hooks/useLocoScroll";
import MasonryGrid from "../components/MasonryGrid";
import HeaderAbout from "../components/About/HeaderAbout";
import Navbar from "../components/Nav/Navbar";
import AboutContent from "../components/About/AboutContent";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Footer/Newsletter";

const About = () => {

    useLocoScroll();

    return (
        <>
            <Navbar animation={false}/>
            <div id={'main-container'}>
                <HeaderAbout/>
                <MasonryGrid displayTitle={'hidden'} customMarginTop={'lg:!mt-24 md:!mt-0 !mt-12'}/>
                <AboutContent/>
                <Newsletter/>
                <Footer/>
            </div>
        </>
    );
};

export default About;