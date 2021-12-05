import React, { Component } from 'react';

import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', done: false, created: new Date(), id: 1, minutes: 15, seconds: 0 },
      { label: 'Make Awesome App', done: false, created: new Date(), id: 2, minutes: 15, seconds: 0 },
      // { label: 'Have a lunch', done: false, created: new Date(), id: 3 },
      // { label: 'Go Sleep', done: false, created: new Date(), id: 4 },
    ],
    filter: '',
  };

  addItem = (text, minutes, seconds) => {
    const newItem = {
      label: text,
      done: false,
      created: new Date(),
      id: this.maxId++,
      min: +minutes,
      sec: +seconds,
    };

    this.setState(({ todoData }) => {
      const newTodoData = [newItem, ...todoData];
      return {
        todoData: newTodoData,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodoData = todoData.filter((__, index) => index !== idx);
      return {
        todoData: newTodoData,
      };
    });
  };

  editItem = (id, text) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.map((el) => {
        if (el.id === id) {
          const newItem = { ...el };
          newItem.label = text;
          return newItem;
        }
        return el;
      });
      return { todoData: newTodoData };
    });
  };

  deleteDoneItem = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => !el.done);

      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newTodoData = [...todoData.slice(0, idx), newItem, ...todoData.splice(idx + 1)];
      return {
        todoData: newTodoData,
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, filter } = this.state;

    const visibleItems = this.filter(todoData, filter);
    const countToDo = todoData.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={visibleItems}
            onDestroy={this.deleteItem}
            onToggleDone={this.onToggleDone}
            editItem={this.editItem}
          />
          <Footer toDo={countToDo} onClear={this.deleteDoneItem} filter={filter} onFilterChange={this.onFilterChange} />
        </section>
      </section>
    );
  }
}
