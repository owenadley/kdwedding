import React from 'react';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

class Wedding extends React.Component {
  render() {
    return (
      <div className="wedding">
        <Header title="The Wedding" />
        <div className="events">
            <div className="event">
              <div className="event-title">Ceremony</div>
              <div className="event-info">
                <div className="event-info-details">  
                  <p className="event-location-name">Tree Island Wedding Ceremony Site</p>
                   <p>1988 Olympic Way, Canmore, AB</p>
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
                  <p className="event-location-name">Canmore Nordic Centre</p>
                  <p>1988 Olympic Way, Canmore, AB</p>
                </div>
                <div className="event-timings">
                  <div className="event-timing">
                    <p>Cocktail Hour</p>
                    <p className="event-time">5:00pm</p>
                  </div>
                  <div className="event-timing">
                    <p>Dinner</p>
                    <p className="event-time">6:00pm</p>
                  </div>                  
                </div>
              </div>
            </div> 
          </div>   

          <div className="event-location">
            <p>Wedding location on map</p>
            <iframe title="Wedding Location on Map" src="https://www.google.com/maps/d/embed?mid=1waMPGkVNS2xzuqlG3zw_NdQ_aNYR1yk5&hl=en" width="100%" height="480" frameBorder="0"></iframe>
          </div>

          <Footer />

      </div>
    )
  }
}

export default Wedding;
