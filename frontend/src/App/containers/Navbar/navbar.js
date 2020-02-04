import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" id="brand-name" href="/">
          Jury Box
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navList">
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/database">
                Juror Database
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upcomingfeatures">
                Upcoming Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
