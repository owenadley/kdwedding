import React from 'react';
import '../App.css';
import moment from 'moment';



class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weddingDate: ''
    }
  }

  componentDidMount() {
    var milisec = moment('2021-05-22').diff(moment());
    var day = milisec / 1000 / 60 / 60 / 24;

    var months = Math.floor(day/ 30);
    var days = Math.floor(((day/ 30) - Math.floor(day/ 30)) * 30);
    var hours = Math.floor(( (((day/ 30) - Math.floor(day/ 30)) * 30) - Math.floor((((day/ 30) - Math.floor(day/ 30)) * 30)) ) * 24)
    

    this.setState({
      months: months,
      days: days,
      hours: hours
    })
  }

  render() {
      return (
    <div className="countdown">
      <div className="countdown-n">
        <p className='subheading' id="old">October 24th, 2020</p>
        <p className='subheading' id="new" >May 22nd, 2021</p>

        <p className="countdown-subheading">Countdown to the Ceremony</p>
        <div className="countdown-times">
          <div>
            <p className="countdown-number">{this.state.months}</p>
            <p className="countdown-label">Months</p>
          </div>
          <div>
            <p className="countdown-number">{this.state.days}</p>
            <p className="countdown-label">Days</p>
          </div>
          <div>
            <p className="countdown-number">{this.state.hours}</p>
            <p className="countdown-label">Hours</p>
          </div>                
        </div>
      </div>
    </div>
      )
}; 
}

export default CountdownTimer;
