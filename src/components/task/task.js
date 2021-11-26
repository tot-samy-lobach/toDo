import React, { Component } from 'react';
import CreatedDate from '../created-date/created-date';

import './task.css';

export default class Task extends Component {
  render() {
    const { label, onDestroy, onToggleDone, done, id, created } = this.props;
    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' completed';
    }

    return (
      <li className={classNames}>
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
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDestroy}></button>
        </div>
        {/* <input type="text" className="edit" value="Editing task" /> */}
      </li>
    );
  }
}
