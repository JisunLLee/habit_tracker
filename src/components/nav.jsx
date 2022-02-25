import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-icon">
          <i class="fa-solid fa-cube"></i>
        </div>
        <span>Habit Tracker</span>
        <span className="nav-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Nav;
