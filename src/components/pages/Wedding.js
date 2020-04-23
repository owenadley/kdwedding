import React from 'react';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

class Wedding extends React.Component {
  render() {
    return (
      <div className="wedding">
        <Header />
        <div className="events">
            <div className="event">
              <div className="event-title">Ceremony</div>
              <div className="event-info">
                <div className="event-info-details">  
                  <p>Canmore Golf and Curling Club</p>
                  <a href="https://www.google.com/maps/place/Canmore+Golf+%26+Curling+Club,+2000+8+Ave,+Canmore,+AB+T1W+1Y2/@51.1005312,-115.3645889,18z/data=!4m2!3m1!1s0x5370cf5fe3d384f1:0xdcf22cf876298530">
                    2000 8 Ave, Canmore, AB T1W 1Y2</a>
                </div>
                <div className="event-timing">
                  <p>Begins at</p>
                  <p className="event-time">1:30pm</p>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="event-title">Cocktail Hour & Dinner</div>
              <div className="event-info">
                <div className="event-info-details">  
                  <p>Cornerstone Theatre</p>
                  <a href="https://www.google.com/maps/place/Cornerstone+Theatre,+125+Kananaskis+Way,+Canmore,+AB+T1W+2X2/@51.0864124,-115.3433668,17z/data=!4m2!3m1!1s0x5370c5bc183a7f41:0x8c9af57739c9eaaa">
                    125 Kananaskis Way, Canmore, AB T1W 2X2</a>
                </div>
                <div className="event-timings">
                  <div className="event-timing">
                    <p>Cocktail Hour</p>
                    <p className="event-time">5:00pm</p>
                  </div>
                  <div className="event-timing">
                    <p>Dinner</p>
                    <p className="event-time">6:00 pm</p>
                  </div>                  
                </div>
              </div>
            </div> 
          </div>   

          <div className="event-location">
            <p>Wedding location on map</p>
            <iframe src="https://www.google.com/maps/d/embed?mid=1waMPGkVNS2xzuqlG3zw_NdQ_aNYR1yk5" width="100%" height="500" frameborder="0"></iframe>
          </div>

          <Footer />

      </div>
    )
  }
}

export default Wedding;
