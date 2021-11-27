import React, { Component } from 'react';
import CreatedDate from '../created-date/created-date';
import EditTask from '../edit-task/edit-task';

import './task.css';

export default class Task extends Component {
  state = {
    editTask: false,
  };

  showEditTask = (id, text) => {
    this.setState(({ editTask }) => {
      return { editTask: !editTask };
    });
  };

  hideEditTask = () => {
    this.setState(({ editTask }) => {
      return { editTask: !editTask };
    });
  };

  render() {
    const { label, onDestroy, onToggleDone, done, id, created, editItem } =
      this.props;
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
            <input
              className="toggle"
              type="checkbox"
              id={id}
              onClick={onToggleDone}
            />
            <label htmlFor={id}>
              <span className="description">{label}</span>
              <CreatedDate created={created} />
            </label>
            <button
              className="icon icon-edit"
              onClick={() => this.showEditTask(id, label)}
            ></button>
            <button className="icon icon-destroy" onClick={onDestroy}></button>
          </div>
        ) : (
          <EditTask
            label={label}
            id={id}
            hideEditTask={this.hideEditTask}
            editItem={editItem}
          />
        )}
      </li>
    );
  }
}
