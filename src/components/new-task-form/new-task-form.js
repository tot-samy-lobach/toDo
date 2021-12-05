import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    label: '',
    minutes: '',
    seconds: '',
  };

  inputLabelChange = (env) => {
    this.setState({
      label: env.target.value,
    });
  };

  inputMinutesChange = (env) => {
    this.setState({
      minutes: +env.target.value,
    });
    // console.log(this.state.label, this.state.minutes, this.state.seconds);
  };

  inputSecondsChange = (env) => {
    this.setState({
      seconds: +env.target.value,
    });
    // console.log(this.state.label, this.state.minutes, this.state.seconds);
  };

  onSubmitForm = (env) => {
    if (env.key === 'Enter') {
      // if(this.state.minutes||)
      env.preventDefault();

      this.props.addItem(this.state.label, this.state.minutes, this.state.seconds);
      this.setState({
        label: '',
        minutes: '',
        seconds: '',
      });
    }
  };

  // addToDoItem = (env) => {
  //   env.preventDefault();

  //   this.props.addItem(this.state.label);
  //   this.setState({
  //     label: '',
  //     minutes: '',
  //     seconds: '',
  //   });
  // };

  render() {
    return (
      <form onKeyPress={this.onSubmitForm} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.inputLabelChange}
          value={this.state.label}
        />
        <input
          className="new-todo-form__timer"
          onChange={this.inputMinutesChange}
          placeholder="Min"
          value={this.state.minutes}
        />
        <input
          className="new-todo-form__timer"
          onChange={this.inputSecondsChange}
          placeholder="Sec"
          value={this.state.seconds}
        />
      </form>
    );
  }
}
