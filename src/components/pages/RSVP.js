import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { faMapMarkerAlt, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RSVP(props) {

    return (

        <div className="RSVP">
            <Header title="RSVP" />

            <div className="rsvp-container">

                <p>RSVP coming soon!</p>

            </div>

            <div>

            <div className="more-info-item" id="rsvpregistry">
                <div className="more-info-item-elements">
                    <div className="bottom-icon">
                        <FontAwesomeIcon className="iconBounce" icon={faGift} color="#fff" size="3x"/>
                    </div>
                    <p className="more-info-heading">Gift Registry</p>
                    <p className="more-info-subheading" >Given Freely and out of love</p>
                    <Link onClick={() => ReactGA.pageview('/registry')} to="/registry"><div className="more-info-btn" id="rsvpmis" ><p>View Registry</p></div></Link>
                </div>    
            </div>   

            </div>

            <Footer/>
      </div>

    )

}

export default RSVP;