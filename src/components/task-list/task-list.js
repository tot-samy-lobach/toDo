import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import './task-list.css';

const TaskList = function ({ todos, onDestroy, onToggleDone, editItem, onCheckBoxClick }) {
  const data = todos.map((item) => {
    const { id, created, label, done, min, sec } = item;

    return (
      <Task
        label={label}
        done={done}
        onDestroy={() => onDestroy(id)}
        onToggleDone={() => onToggleDone(id)}
        key={id}
        id={id}
        created={created}
        editItem={editItem}
        onCheckBoxClick={() => onCheckBoxClick(id)}
        min={min}
        sec={sec}
      />
    );
  });

  return <ul className="todo-list">{data}</ul>;
};

TaskList.defaultProps = {
  onDestroy: () => {},
  onToggleDone: () => {},
  editItem: () => {},
  onCheckBoxClick: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDestroy: PropTypes.func,
  onToggleDone: PropTypes.func,
  editItem: PropTypes.func,
  onCheckBoxClick: PropTypes.func,
};

export default TaskList;
