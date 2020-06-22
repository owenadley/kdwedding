import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../components/pages/Home';
import Wedding from '../components/pages/Wedding';
import GuestInfo from '../components/pages/GuestInfo';
import Registry from '../components/pages/Registry';
import ReactGA from 'react-ga';
import ScrollToTop from '../components/ScrollToTop';

class Nav extends React.Component {

  componentDidMount() {
    document.title = "K&D Wedding";
    ReactGA.initialize('UA-149133035-1');
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div className="container">
        <Router>
          <ScrollToTop>
            <div className="nav">
              <div className="nav-tab" id="nav-tab-1">
              <Link to="/"><p onClick={ReactGA.pageview('/')} className="nav-tab-text">HOME</p></Link>
              </div>

              <div className="nav-tab" id="nav-tab-2">
              <Link to="/wedding"><p onClick={()=> {ReactGA.pageview('/wedding')}} className="nav-tab-text">THE WEDDING</p></Link>
              </div>

              <div className="nav-tab" id="nav-tab-3">
              <Link to="/guestinfo"><p onClick={()=> {ReactGA.pageview('/guestinfo')}} className="nav-tab-text">GUEST INFO</p></Link>
              </div>
            </div>


            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/registry">
                <Registry />
              </Route>             
              <Route path="/wedding">
                <Wedding />
              </Route>
                <Route path="/guestinfo">
                <GuestInfo />
              </Route>
              <Route path="/">
                <Home />
              </Route>           
            </Switch>    
          </ScrollToTop>
        </Router>

    </div>
    )
  }; 
}


export default Nav;