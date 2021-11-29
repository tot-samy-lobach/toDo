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
    label: PropTypes.string,
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

  changeLabel = (env) => {
    this.setState({
      newText: env.target.value,
    });
  };

  submitEditLabel = (env) => {
    env.preventDefault();
    this.props.editItem(this.props.id, this.state.newText);
    this.props.hideEditTask();
  };

  render() {
    const { id } = this.props;
    return (
      <form onSubmit={this.submitEditLabel} className={id}>
        <input type="text" className="edit" onChange={this.changeLabel} value={this.state.newText} autoFocus />
      </form>
    );
  }
}
