import React from 'react';
import { BiBell } from 'react-icons/bi';
import softlife from '../assets/softlife.png'



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: "0 2vh"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h4>PrestoBill</h4>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Expenses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Statistics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <BiBell style={{ marginRight: "13px" }} />
              <img src={softlife} alt="User Profile" className="rounded-circle border border-primary" width="50" height="50" />
            </div>

          </div>
        </div>
      </nav>
        {/* <hr style={{width:"95%", margin:"auto"}}/> */}
    </div>
  );
}

export default Navbar;
