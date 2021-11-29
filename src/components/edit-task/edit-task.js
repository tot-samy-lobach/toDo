import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './edit-task.css';

export default class EditTask extends Component {
  static defaultProps = {
    label: 'No name. Please, add some text',
    hideEditTask: () => {},
    editItem: () => {},
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    hideEditTask: PropTypes.func,
    editItem: PropTypes.func,
  };

  state = {
    newText: '',
  };

  componentDidMount() {
    const { label } = this.props;
    this.setState({ newText: label });
  }

  changeLabel = (e) => {
    this.setState({
      newText: e.target.value,
    });
  };

  submitEditLabel = (e) => {
    e.preventDefault();
    this.props.editItem(this.props.id, this.state.newText);
    this.props.hideEditTask();
  };

  render() {
    const { id } = this.props;
    return (
      <form onSubmit={this.submitEditLabel} className={id}>
        <input
          type="text"
          className="edit"
          onChange={this.changeLabel}
          value={this.state.newText}
          autoFocus
        />
      </form>
    );
  }
}
