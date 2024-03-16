import React from 'react'

function Chart() {
  return (
    <section>
        <div className="card">
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
    </section>
  )
}

export default Chart