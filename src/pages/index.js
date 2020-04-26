import React from 'react';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import Aboutus from '../components/Aboutus';
import Banner from '../components/Banner';

import Products from '../components/Products';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
    <Layout>
        <Header/>
        <Banner/>

        <Aboutus/>
        <Portfolio/>
        <Products/>
        <Services/>

        <Subscribe/>
        <SocialLinks/>
        <Footer/>
    </Layout>
);

export default IndexPage;