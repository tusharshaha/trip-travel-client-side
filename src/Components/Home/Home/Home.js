import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Places from '../Places/Places';
import Testimonials from '../Testimonials/Testimonials';
import TopSection from '../TopSection/TopSection'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopSection></TopSection>
            <Places></Places>
            <About></About>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;