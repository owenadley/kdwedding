import React from 'react';
import '../../App.css';
import CountdownTimer from '../CountdownTimer';
import AboutImg from '../AboutImg';
import MoreInfo from '../MoreInfo';
import Footer from '../Footer';

function Home() {

  return (

    <div className="home">
        <div className="home-backdrop-tint">
          <div className="home-backdrop-text">
            <p id="tagline">WE ARE GETTING MARRIED!</p>
            <p id="names">Katelyn <span>&</span> Dan</p>
            <p id="date"><span><img src="/swirl_left_small.png"/></span><span id="datetext">24.10.2020</span><span><img src="/swirl_right_small.png"/></span></p>
          </div>
        </div>
        <div className="home-backdrop-tint-sm">
          <div className="home-backdrop-text">
            <p id="tagline">WE ARE GETTING MARRIED!</p>
            <p id="names">Katelyn <span>&</span> Dan</p>
          </div>
        </div>



        <div className="home-backdrop"/>

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