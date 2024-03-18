import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { PiggyBank } from 'react-bootstrap-icons';
import Header from '../components/Header';
import AddExpenses from './AddExpenses';


function Bills() {
  return (
    <main>
        <Header />
        <section style={{ marginTop:'7vh'}}>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Iklina Bill</h4>
                        <h6 className='text-muted' style={{fontWeight:'500'}}>Dashboard</h6>
                    </div>
                    <Link to="/addExpense">
                        <button className='pill-button'>Add New Expense</button>
                    </Link>
                </div>

                <br />
                <div className='row'>
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
                        </div>
                    </div>  
                </div>  
            </div>  
        </section>
    </main>
  )
}

export default Bills