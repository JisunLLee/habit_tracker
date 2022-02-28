import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Codding', count: 0 },
    ],
  };

  handleAdd = (name) => {
    const habits = this.state.habits.map((habit_) => habit_);
    const id = this.state.habits[habits.length - 1].id + 1;
    habits.push({ id, name, count: 0 });
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((habit_) => {
      if (habit_.id === habit.id) {
        return { ...habit_, count: habit_.count + 1 };
      }
      return habit_;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((habit_) => {
      if (habit_.id === habit.id) {
        const count = habit_.count - 1;
        return { ...habit_, count: count < 0 ? 0 : count };
      }
      return habit_;
    });
    this.setState({ habits });
    const count = this.state.habits.filter((v) => v.count > 0).length;
    if (count !== this.state.count) this.setState({ count });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((v) => v !== habit);
    this.setState({ habits });
  };

  handleCount = () => {
    const habits = this.state.habits.map((habit_) => {
      if (habit_.count !== 0) {
        return { ...habit_, count: 0 };
      }
      return habit_;
    });
    this.setState({ habits });
  };

  handleClear = () => {
    this.setState({
      habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Codding', count: 0 },
      ],
    });
  };

  render() {
    return (
      <div className="main">
        <div className="contents">
          <Nav
            totalCount={this.state.habits.filter((v) => v.count !== 0).length}
          />
          <Habits
            habits={this.state.habits}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
        <div className="reset-area">
          <button className="reset-btn" onClick={this.handleCount}>
            Reset count
          </button>
          <button className="reset-btn" onClick={this.handleClear}>
            Reset All
          </button>
        </div>
      </div>
    );
  }
}

export default App;
