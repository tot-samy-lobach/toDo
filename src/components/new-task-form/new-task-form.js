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
  };

  inputChange = (env) => {
    this.setState({
      label: env.target.value,
    });
  };

  addToDoItem = (env) => {
    env.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.addToDoItem}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.inputChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
