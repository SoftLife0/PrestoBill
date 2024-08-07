import React from 'react'
import Header from '../components/Header';
import Chart from './Chart';
import { BiReceipt, BiCoin } from 'react-icons/bi';
import { CashCoin, PiggyBank, GraphUpArrow, Receipt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AllBills from './AllBills';


function Dashboard() {
  return (
    <div>
      <Header />
      <section style={{marginTop:"5vh"}}>
        <div className="container">

          <h5 className='text-muted' style={{fontWeight:"500"}}>Welcome Kweku!</h5>
          <br />

          <div className="row">
              <div className="col-lg-8">
                  <div className="row">
                      <div className="col-lg-5">
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

                      <div className="col-lg-3 col-6">
                        <Link to="/allBills" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card">
                              <h6>Bills</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <Receipt style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>8</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-6">
                        <Link to="/transaction" style={{ textDecoration: 'none', color: 'black'}}>
                          <div data-aos="fade-up" data-aos-delay="100" className="card">
                              <h6>Transactions</h6>
                              <div className='d-flex justify-content-between align-items-center'>
                                <CashCoin style={{ fontSize: "25px" }} />
                                <h2 style={{ fontWeight: 700 }}>21</h2>
                            </div>
                          </div>
                        </Link>
                      </div>

                    
                  </div>


                  <h6 className='text-muted'>History</h6>

                  <AllBills showHeader={false} showTitle={false} />

              </div>


              <div className="col-lg-4">
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