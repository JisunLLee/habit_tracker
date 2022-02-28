import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  console.log('HabitAddForm render');
  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input
        className="add-input"
        type="text"
        placeholder="Please enter your habit"
        ref={inputRef}
      />
      <button className="add-btn">Add</button>
    </form>
  );
});

export default HabitAddForm;
