import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timer.css';

export default class Timer extends Component {
  static defaultProps = {
    min: 15,
    sec: 0,
  };

  static propTypes = {
    min: PropTypes.number,
    sec: PropTypes.number,
  };

  state = {
    min: this.props.min,
    sec: this.props.sec,
    isCounting: false,
  };

  componentWillUnmount() {
    clearInterval(this.counterID);
  }

  minDecrement = () => {
    const { min } = this.state;
    this.setState({
      min: min - 1,
      sec: 59,
    });
  };

  secDecrement = () => {
    const { min, sec, isCounting } = this.state;

    if (min === 0 && sec === 0 && isCounting === true) {
      clearInterval(this.counterID);
      this.setState({
        isCounting: false,
      });
    }
    if (sec > 0) {
      this.setState({
        sec: sec - 1,
        isCounting: true,
      });
    } else {
      this.minDecrement();
    }
  };

  onPause = (event) => {
    event.stopPropagation();
    this.setState({ isCounting: false });
    clearInterval(this.counterID);
  };

  onStart = (event) => {
    event.stopPropagation();

    this.setState({ isCounting: true });
    this.counterID = setInterval(() => {
      this.secDecrement();
    }, 1000);
  };

  render() {
    const { min, sec, isCounting } = this.state;
    const button = !isCounting ? (
      <button type="button" className="icon icon-play" onClick={this.onStart} />
    ) : (
      <button type="button" className="icon icon-pause" onClick={this.onPause} />
    );
    return (
      <span className="description">
        {button}
        {min}:{sec}
      </span>
    );
  }
}
