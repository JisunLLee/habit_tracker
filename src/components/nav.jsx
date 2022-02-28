import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    console.log('Nav render');
    return (
      <div className="nav">
        <div className="nav-icon">
          <i className="fa-solid fa-cube"></i>
        </div>
        <span>Habit Tracker</span>
        <span className="nav-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Nav;
