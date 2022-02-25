import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          className="add-input"
          type="text"
          placeholder="Please enter your habit"
          ref={this.inputRef}
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
