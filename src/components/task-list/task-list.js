import React from 'react';
import Task from '../task';
import './task-list.css';

const TaskList = ({ todos, onDestroy, onToggleDone }) => {
  const data = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        {...itemProps}
        onDestroy={() => onDestroy(id)}
        onToggleDone={() => onToggleDone(id)}
        key={id}
      />
    );
  });

  return <ul className="todo-list">{data}</ul>;
};

export default TaskList;