import React from 'react';
import '../../App.css';
import CountdownTimer from '../CountdownTimer';
import AboutImg from '../AboutImg';
import MoreInfo from '../MoreInfo';
import Footer from '../Footer';
import RescheduleInfo from '../RescheduleInfo';

function Home() {

  // TODO: Update Date
  return (

    <div className="home">
        <div className="home-backdrop-tint">
          <div className="home-backdrop-text">
            <p id="tagline">WE ARE GETTING MARRIED!</p>
            <p id="names">Katelyn <span>&</span> Dan</p>
            <p id="date"><span><img alt="Swirl left" src="/swirl_left_small.png"/></span><span id="datetext">10.06.2022</span><span><img alt="Swirl right" src="/swirl_right_small.png"/></span></p>
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
        </div>

        <RescheduleInfo />
        <AboutImg />
        <MoreInfo />
        <Footer />

    </div>

  ); 
}

export default Home;
