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
    var milisec = moment('2020-10-24').diff(moment());
    var sec = milisec / 1000;
    var min = sec / 60;
    var hr = min / 60;
    var day = hr / 24;

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
      <p className='subheading'>October 24th, 2020</p>
      <p className='countdown-text'>{this.state.months} Months {this.state.days} Days {this.state.hours} Hours</p>
    </div>
      )
}; 
}

export default CountdownTimer;
