import React from 'react';
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import MainTag from "../components/MainTag";
function contact() {
    return (
        <MainTag>
            <Banner bannerTitle="Contact Me" />
            <ContactSection />
        </MainTag>
    )
}

export default contact