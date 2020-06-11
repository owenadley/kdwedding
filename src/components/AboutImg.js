import React from 'react';
import '../App.css';

class AboutImg extends React.Component {

  componentDidMount() {}

  render() {    
      return (
        <div className="about-img">
            <div className="about-img-people">
                <div className="about-img-person">
                    <p className="person-role">The Bride</p>
                    <p className="person-name">Katelyn Adley</p>
                    <div className="about-img-container">
                        <img className="person-img" src="/kdimg2.jpg"/>
                    </div>                    
                </div>
                <div className="about-img-person">
                    <p className="person-role">The Groom</p>
                    <p className="person-name">Dan Cooper</p>
                    <div className="about-img-container">
                        <img className="person-img" src="/kdimg1.jpg"/>
                    </div>
                </div>                
            </div>
        </div>
      )
   }; 
}

export default AboutImg;
