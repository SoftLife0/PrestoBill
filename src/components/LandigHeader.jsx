import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'react-bootstrap';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:'0 2vh'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <h4>PrestoBill</h4>
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="" className='pill-button'>
                    Dashboard
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        {/* <hr style={{width:"95%", margin:"auto"}}/> */}
    </div>
  );
}

export default Navbar;
