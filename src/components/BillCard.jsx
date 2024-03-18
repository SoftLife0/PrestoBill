import React from 'react';
import { Link } from 'react-router-dom';
import { Receipt } from 'react-bootstrap-icons';

function BillCard({ to, title, amountPaid, totalAmount, progress, status }) {

  const statusText = active ? 'Active': 'Inactive'; 

  const boxStyle = {
    margin: '0',
    backgroundColor: status === 'active' ? 'green' : 'red'
  };

  return (
    <div className="col-md-6">
      <Link to={`/bill/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div data-aos="fade-up" className="card" style={{ padding: '10px 30px' }}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className="box" style={boxStyle}></div>
              <p className='text-muted mb-0' style={{ marginLeft: '3px', fontSize: '13px' }}>{statusText}</p>
            </div>
            <Receipt style={{ fontSize: "15px" }} />
          </div>
          <div className='mt-2'>
            <h6>{title}</h6>
            <div className="d-flex justify-content-between">
              <small className="text-muted">₵{amountPaid}</small>
              <small className="text-muted">₵{totalAmount}</small>
            </div>
            <div className="progress" style={{ height: '5px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: progress }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex justify-content-between">
              <small className="text-muted">{progress}</small>
              <small className="text-muted">₵{totalAmount - amountPaid} more to go</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BillCard;
