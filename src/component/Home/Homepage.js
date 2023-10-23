import React from 'react';
import Homecarousel from './Homecarousel';
import Banner from './Banner';
import Newarrivals from './Newarrivals';
import Trending from './Trending';
import Featured from './Featured';
import Iconic from './Iconic';
import Shopbysport from '../Sport/Shopbysport';

import Nikemembership from './Nikemembership';
import Linksend from './Linksend';
import Footer from './Footer/Footer';
import Fallstyles from './fallstyles/Fallstyles';

const Homepage = () => {
    return (
        <div >
            
            <Homecarousel></Homecarousel>
            <Banner></Banner>
            <Newarrivals></Newarrivals>
            <Trending></Trending>
            <Featured></Featured>
            <Iconic></Iconic>
            <Shopbysport></Shopbysport>
           <Fallstyles></Fallstyles>
            <Nikemembership></Nikemembership>
            <Linksend></Linksend>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;