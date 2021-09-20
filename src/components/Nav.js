import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../components/pages/Home';
import Wedding from '../components/pages/Wedding';
import GuestInfo from '../components/pages/GuestInfo';
import Registry from '../components/pages/Registry';
import ReactGA from 'react-ga';
import ScrollToTop from '../components/ScrollToTop';
import RSVP from '../components/pages/RSVP';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      scrollStatus: "top",
      mobileNav: false
    };
  }

  componentDidMount() {
    document.title = "K&D Wedding";
    ReactGA.initialize('UA-149133035-1');
    ReactGA.pageview('/');

    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 150) {
        if (this.state.scrollStatus !== "offTop") {
          this.setState({scrollStatus: "offTop"});
        }
      } else {
        if (this.state.scrollStatus !== "top") {
          this.setState({scrollStatus: "top"});
        }
      }
    })
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  toggleNavM = () => {
    this.setState(prevstate => ({mobileNavM: !prevstate.mobileNavM}))
  }

  render() {

    let isScrolled = this.state.scrollStatus;
    let nav;

    isScrolled === "top" ? nav = "nav" : nav = "navScrolled";
    
    return (
      <div className="container">
        <Router>
          <ScrollToTop>

            <div className={nav}>
              <div className="nav-tab" id="nav-tab-1">
              <Link to="/"><p onClick={ReactGA.pageview('/')} className="nav-tab-text">HOME</p></Link>
              </div>

              <div className="nav-tab" id="nav-tab-2">
              <Link to="/wedding"><p onClick={()=> {ReactGA.pageview('/wedding')}} className="nav-tab-text">WEDDING</p></Link>
              </div>

              <div className="nav-tab" id="nav-tab-3">
              <Link to="/guestinfo"><p onClick={()=> {ReactGA.pageview('/guestinfo')}} className="nav-tab-text">GUEST INFO</p></Link>
              </div>

              <div className="nav-tab" id="nav-tab-4">
              <Link to="/rsvp"><p onClick={()=> {ReactGA.pageview('/rsvp')}} className="nav-tab-text">RSVP</p></Link>
              </div>  

              <div className="nav-tab" id="nav-tab-5">
              <Link to="/registry"><p onClick={()=> {ReactGA.pageview('/regsitry')}} className="nav-tab-text">REGISTRY</p></Link>
              </div>                
            </div>

            <button onClick={this.toggleNavM} className="mobile-nav">
              {this.state.mobileNavM ? 
                <FontAwesomeIcon icon={faTimes} color="#fff" size="2x"/>
              :
                <FontAwesomeIcon icon={faBars} color="#fff" size="2x"/>
              }
            </button>    

            <div className={`mobile-nav-wrap ${this.state.mobileNavM ? 'mobile-nav-wrap-trans' : null}`}>
                <div className="nav-tabm" id="nav-tab-1">
                <Link to="/"><p onClick={() => {this.setState({mobileNavM: false}); ReactGA.pageview('/')}} className="nav-tab-textm">HOME</p></Link>
                </div>

                <div className="nav-tabm" id="nav-tab-2">
                <Link to="/wedding"><p onClick={()=> {this.setState({mobileNavM: false}); ReactGA.pageview('/wedding')}} className="nav-tab-textm">WEDDING</p></Link>
                </div>

                <div className="nav-tabm" id="nav-tab-3">
                <Link to="/guestinfo"><p onClick={()=> {this.setState({mobileNavM: false}); ReactGA.pageview('/guestinfo')}} className="nav-tab-textm">GUEST INFO</p></Link>
                </div>

                <div className="nav-tabm" id="nav-tab-4">
                <Link to="/rsvp"><p onClick={()=> {this.setState({mobileNavM: false}); ReactGA.pageview('/rsvp')}} className="nav-tab-textm">RSVP</p></Link>
                </div>  

                <div className="nav-tabm" id="nav-tab-5">
                <Link to="/registry"><p onClick={()=> {this.setState({mobileNavM: false}); ReactGA.pageview('/regsitry')}} className="nav-tab-textm">REGISTRY</p></Link>
                </div>    
            </div>         




            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/rsvp">
                <RSVP />
              </Route>               
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