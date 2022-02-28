import React, { PureComponent } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`Habit [ ${this.props.habit.name} ] Mount`);
  }
  componentWillUnmount() {
    console.log(`Habit [ ${this.props.habit.name} ] Will UnMount`);
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log('Habit [', name, '] render');
    return (
      <li className="habit">
        <div>
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
        </div>
        <div className="habit-buttons">
          <button
            className="habit-button habit-increase"
            onClick={this.handleIncrement}
          />
          <button
            className="habit-button habit-decrease"
            onClick={this.handleDecrement}
          />
          <button
            className="habit-button habit-delete"
            onClick={this.handleDelete}
          />
        </div>
      </li>
    );
  }
}

export default Habit;
