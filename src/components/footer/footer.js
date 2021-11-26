import React from 'react';

import TasksFilter from '../tasks-filter';
import './footer.css';

const Footer = ({ toDo, onClear, filter, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
