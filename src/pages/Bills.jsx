import React from 'react'
import { BiReceipt } from 'react-icons/bi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Bills() {
  return (
    <section>
        <div className="row">
            <div className="col-md-6">
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
        </div>    
    </section>
  )
}

export default Bills