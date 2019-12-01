import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";

export default class counter extends Component {
  state = {
    deadline: "2019-12-07T11:00:00",
    hours: "0",
    minutes: "0",
    seconds: "0",
    days: "0"
  };

  timeLeft = deadline => {
    var time = Date.parse(deadline) - Date.parse(new Date());

    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 / 60)) % 60);
      const hours = Math.floor(((time / (1000 * 60 * 60)) % 24));
      const days = Math.floor((time / (1000* 60 * 60 * 24)));
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        days: days
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.timeLeft(this.state.deadline);
    }, 1000);
  }

  render() {
    return (
      <Bounce left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Counter start ins</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hours</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Minutes</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Seconds</div>
            </div>
          </div>
        </div>
      </Bounce>
    );
  }
}
