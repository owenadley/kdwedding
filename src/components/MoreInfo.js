import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Wedding from './pages/Wedding';

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

    if (this.state.redirectMore) {
        return <Redirect to="/wedding" push={true}/>
    }
    if (this.state.redirectRegistry) {
        return <Redirect to="/registry" push={true}/>
    }    

      return (
        <div className="more-info-container">
      
                <div className="more-info-items">
                    <div className="more-info-item">
                        <div className="more-info-item-elements">
                            <div className="bottom-icon">
                                <img src="/icon_location.png"/>
                            </div>
                            <p className="more-info-heading">Wedding Location</p>
                            <p className="more-info-subheading">Canmore, Alberta</p>
                            <div className="more-info-btn" onClick={() => this.setState({redirectMore: true})}><p>Read more</p></div>
                        </div>    
                    </div>   
                    <div className="more-info-item">
                        <div className="more-info-item-elements">
                            <div className="bottom-icon">
                                <img src="/icon_gifts.png"/>
                            </div>
                            <p className="more-info-heading">Gift Registry</p>
                            <p className="more-info-subheading">Given Freely and out of love</p>
                            <div className="more-info-btn" onClick={() => this.setState({redirectRegistry: true})}><p>View Registry</p></div>
                        </div>    
                    </div>                           
                </div>           
        </div>
      )
   }; 
}

export default MoreInfo;
