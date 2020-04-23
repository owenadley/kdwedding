import React from 'react';
import '../../App.css';
import CountdownTimer from '../CountdownTimer';
import AboutImg from '../AboutImg';
import MoreInfo from '../MoreInfo';
import Footer from '../Footer';

function Home() {

  return (

    <div className="home">
        <div className="home-backdrop">
            {/* <img src="/kdcover.jpg"/> */}
        </div>
        <div className="countdown-timer">
              <CountdownTimer />
              <AboutImg />
              <MoreInfo />
              <Footer />
        </div>
    </div>

  ); 
}

export default Home;
