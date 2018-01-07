import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Add Product</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Toolbar;
