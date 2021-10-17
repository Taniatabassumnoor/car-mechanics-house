import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div id="home">
         
           <Banner></Banner>
          <Services></Services>
           <Experts></Experts>
           <Footer></Footer>
        </div>
    );
};

export default Home;