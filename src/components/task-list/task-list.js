import React from 'react';
import Task from '../task';
import PropTypes from 'prop-types';
import './task-list.css';

const TaskList = ({ todos, onDestroy, onToggleDone, editItem }) => {
  const data = todos.map((item) => {
    const { id, created, label, done } = item;

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
      />
    );
  });

  return <ul className="todo-list">{data}</ul>;
};

TaskList.defaultProps = {
  todos: [],
  onDestroy: () => {},
  onToggleDone: () => {},
  editItem: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDestroy: PropTypes.func,
  onToggleDone: PropTypes.func,
  editItem: PropTypes.func,
};

export default TaskList;
