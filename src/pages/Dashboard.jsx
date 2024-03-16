import React from 'react'
import Header from '../components/Header';
import Chart from './Chart';
import { BiReceipt, BiCoin } from 'react-icons/bi';
import { CashCoin, PiggyBank, GraphUpArrow, Receipt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Bills from './Bills';


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
                      <div className="col-md-6">
                      <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                        <div data-aos="fade-up" className="card">
                            <h6>Deposit</h6>
                            <div className='d-flex justify-content-between align-items-center'>
                                <PiggyBank style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>₵1200</h2>
                            </div>
                        </div>
                      </Link>
                      </div>

                      <div className="col-md-3 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card">
                              <h6>Bills</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <Receipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>8</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-3 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card">
                              <h6>Transactions</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <CashCoin style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>21</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Savings</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <PiggyBank style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>0</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-6 col-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card" style={{background:'#f1f6ff'}}>
                              <h6>Report</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <GraphUpArrow style={{ fontSize: "25px" }} />
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
                      </div> */}
                  </div>


                  <h6 className='text-muted'>Overview</h6>

                  <Bills />
              </div>


              <div className="col-md-5">
                <Chart />
              </div>

          </div>
        </div>

      </section>

      <br />
    </div>
  )
}

export default Dashboard