import React from 'react';
import PropTypes from 'prop-types';
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

Footer.defaultProps = {
  toDo: 0,
  onClear: () => {},
  filter: 'all',
  onFilterChange: () => {},
};

Footer.propTypes = {
  toDo: PropTypes.number,
  onClear: PropTypes.func,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default Footer;
