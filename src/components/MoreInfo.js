import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
class MoreInfo extends React.Component {

  componentDidMount() {}

    constructor(props) {
        super(props);
        this.state = {
            redirectMore: false,
            redirectRegistry: false
        }
    }

  render() {      

      return (
        <div className="more-info-container">
      
                <div className="more-info-items">
                    <div className="more-info-item">
                        <div className="more-info-item-elements">
                            <div className="bottom-icon">
                                <img alt="Location icon" src="/icon_location.png"/>
                            </div>
                            <p className="more-info-heading">Wedding Location</p>
                            <p className="more-info-subheading">Canmore, Alberta</p>
                            <Link onClick={() => ReactGA.pageview('/wedding')} to="/wedding"><div className="more-info-btn"><p>Read more</p></div></Link>
                        </div>    
                    </div>   
                    <div className="more-info-item">
                        <div className="more-info-item-elements">
                            <div className="bottom-icon">
                                <img alt="Gift icon" src="/icon_gifts.png"/>
                            </div>
                            <p className="more-info-heading">Gift Registry</p>
                            <p className="more-info-subheading">Given Freely and out of love</p>
                            <Link onClick={() => ReactGA.pageview('/registry')} to="/registry"><div className="more-info-btn"><p>View Registry</p></div></Link>
                        </div>    
                    </div>                           
                </div>           
        </div>
      )
   }; 
}

export default MoreInfo;
