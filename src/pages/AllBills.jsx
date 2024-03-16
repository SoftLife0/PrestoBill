import React from 'react'
import { Receipt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';


function AllBills({showHeader = true, showTitle = true}) {
  return (
    <main>

        {showHeader && <Header/>}

        <section>
            <div className="container">
                {showTitle && (
                    <h5 className='text-muted' style={{fontWeight:"500", marginTop:'7vh'}}>All Bills</h5>
                )}
                <div className="row">
                    <div className="col-md-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                            <div data-aos="fade-up" className="card" style={{padding:'10px 30px'}}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="box expense" style={{margin:'0'}}></div>
                                        <p className='text-muted mb-0' style={{marginLeft:'3px', fontSize:'13px'}}>Bill</p>
                                    </div>
                                    <Receipt style={{ fontSize: "15px" }} />
                                </div>
                                <div className='mt-2'>
                                    <h6>Iklina</h6>

                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">₵0</small>
                                        <small className="text-muted">₵867</small>
                                    </div>
                                    <div className="progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">30%</small>
                                        <small className="text-muted">₵256 more to go</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                            <div data-aos="fade-up" className="card" style={{padding:'15px 30px'}}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="box expense" style={{margin:'0'}}></div>
                                        <p className='text-muted mb-0' style={{marginLeft:'3px', fontSize:'13px'}}>Bill</p>
                                    </div>
                                    <Receipt style={{ fontSize: "15px" }} />
                                </div>
                                <div className='mt-2'>
                                    <h6>AWS Server Bill</h6>

                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">₵0</small>
                                        <small className="text-muted">₵300</small>
                                    </div>
                                    <div className="progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">0%</small>
                                        <small className="text-muted">₵300 more to go</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                            <div data-aos="fade-up" className="card" style={{padding:'10px 30px'}}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="box expense" style={{margin:'0'}}></div>
                                        <p className='text-muted mb-0' style={{marginLeft:'3px', fontSize:'13px'}}>Bill</p>
                                    </div>
                                    <Receipt style={{ fontSize: "15px" }} />
                                </div>
                                <div className='mt-2'>
                                    <h6>Transportation</h6>

                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">₵0</small>
                                        <small className="text-muted">₵500</small>
                                    </div>
                                    <div className="progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">70%</small>
                                        <small className="text-muted">₵135 more to go</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-6">
                        <Link to="#" style={{ textDecoration: 'none', color: 'black'}}>
                            <div data-aos="fade-up" className="card" style={{padding:'10px 30px'}}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className="box expense" style={{margin:'0'}}></div>
                                        <p className='text-muted mb-0' style={{marginLeft:'3px', fontSize:'13px'}}>Bill</p>
                                    </div>
                                    <Receipt style={{ fontSize: "15px" }} />
                                </div>
                                <div className='mt-2'>
                                    <h6>Others</h6>

                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">₵0</small>
                                        <small className="text-muted">₵8000</small>
                                    </div>
                                    <div className="progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <small className="text-muted">50%</small>
                                        <small className="text-muted">₵4000 more to go</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>  
            </div>  
        </section>
    </main>
  )
}

export default AllBills