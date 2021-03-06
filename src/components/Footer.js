import React from 'react';
import '../App.css';

class Footer extends React.Component {

  componentDidMount() {}

  render() {    
      return (
        <div className="footer-container">
            <div className="footer-items">
                <div className="footer-item">
                    <img alt="Swirl left" src="/swirl_left_transparent.png"/>
                </div>
                <div className="footer-item">
                    <img alt="Birds" src="/birds_icon.png"/>
                    <p>Katelyn & Dan</p>
                </div>
                <div className="footer-item">
                    <img alt="Swirl right" src="/swirl_right_transparent.png"/>
                </div>                
                                
            </div>
        </div>
      )
   }; 
}

export default Footer;
