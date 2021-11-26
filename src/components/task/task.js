import React, { Component } from 'react';

import './task.css';

export default class Task extends Component {
  render() {
    const { label, onDestroy, onToggleDone, done } = this.props;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' completed';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDestroy}></button>
        </div>
        {/* <input type="text" className="edit" value="Editing task" /> */}
      </li>
    );
  }
}
