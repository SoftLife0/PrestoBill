import React from 'react'
import Header from '../components/Header';
import { BiReceipt } from 'react-icons/bi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Dashboard() {
  return (
    <div>
      <Header />
      <section style={{marginTop:"5vh"}}>
        <div className="container">

          <h5 className='text-muted' style={{fontWeight:"500"}}>Welcome Back, Kweku!</h5>
          <br />

          <div className="row">
              <div className="col-md-7">
                  <div className="row">
                      <div className="col-md-6 col-6">
                      <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                        <div data-aos="fade-up" className="card" style={{background:'#f1f6ff'}}>
                            <h6>Income</h6>
                            <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                        </div>
                    </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Sender Id</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Sender Id</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Sender Id</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Sender Id</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Sender Id</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <BiReceipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                  </div>
              </div>


              <div className="col-md-5">
                <div className="card" style={{background:'#f1f6ff'}}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">Net Worth</h5>
                        {/* Circle with text */}
                        <div className="circle-container">
                            <div className="circle">
                                <div className="circle-content">$500,000</div>
                            </div>
                        </div>

                        <div className="details">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="asset-expense-other d-flex justify-content-between align-items-center">
                                      <div className='d-flex justify-content-between align-items-center'>
                                        <span>Asset</span>
                                        <div className="box asset"></div>
                                      </div>
                                        <span>$150000</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="asset-expense-other d-flex justify-content-between align-items-center">
                                        <span>Expense</span>
                                        <div className="box expense mr-5"></div>
                                        <span>$50000</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="asset-expense-other d-flex justify-content-between align-items-center">
                                        <span>Other</span>
                                        <div className="box other mr-2"></div>
                                        <span>$10000</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Button to view details */}
                        <button type="button" className="pill-button">View Details</button>
                    </div>
                </div>
              </div>

          </div>
        </div>

      </section>

      <br />
    </div>
  )
}

export default Dashboard