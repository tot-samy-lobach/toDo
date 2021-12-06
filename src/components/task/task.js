import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreatedDate from '../created-date/created-date';
import Timer from '../timer';
import EditTask from '../edit-task/edit-task';
import './task.css';

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Task extends Component {
  static defaultProps = {
    label: 'No name. Please, edit this task',
    done: false,
    created: new Date(),
    id: getRandom(1000, 10000),
    onDestroy: () => {},
    onToggleDone: () => {},
    editItem: () => {},
    onCheckBoxClick: () => {},
    min: 0,
    sec: 0,
  };

  static propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
    created: PropTypes.object,
    id: PropTypes.number,
    onDestroy: PropTypes.func,
    onToggleDone: PropTypes.func,
    editItem: PropTypes.func,
    onCheckBoxClick: PropTypes.func,
    min: PropTypes.number,
    sec: PropTypes.number,
  };

  state = {
    editTask: false,
  };

  showEditTask = () => {
    this.setState(({ editTask }) => ({ editTask: !editTask }));
  };

  hideEditTask = () => {
    this.setState(({ editTask }) => ({ editTask: !editTask }));
  };

  render() {
    const { label, onDestroy, onToggleDone, done, id, created, editItem, onCheckBoxClick, min, sec } = this.props;
    const showEdit = this.state.editTask;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' completed';
    }

    if (showEdit) {
      classNames += ' editing';
    }

    return (
      <li className={classNames}>
        {!showEdit ? (
          <div className="view">
            <input className="toggle" type="checkbox" id={id} onClick={onToggleDone} checked={done} />
            <label htmlFor={id}>
              <span className="description">{label}</span>
              <Timer min={min} sec={sec} onCheckBoxClick={onCheckBoxClick} />
              <CreatedDate created={created} />
            </label>
            <button className="icon icon-edit" onClick={() => this.showEditTask(id, label)} type="button" />
            <button className="icon icon-destroy" onClick={onDestroy} type="button" />
          </div>
        ) : (
          <EditTask label={label} id={id} hideEditTask={this.hideEditTask} editItem={editItem} />
        )}
      </li>
    );
  }
}
