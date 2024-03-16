import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Transaction() {
  return (
    <main>
        <Header />

        <section className="container" style={{ marginTop:'7vh'}}>
            <div className="info-block" style={{ marginTop: "5vh" }}>
                <h5 className='text-muted'>Transactions</h5>
                {/* Scale */}
                <div className='d-flex justify-content-around align-items-center'>
                    <Link to="#">
                        <div style={{ display: "flex" }}>
                            <div className='box success' style={{ margin: 'auto', marginRight: '10px'}}></div>
                            <h6>Successful</h6>
                        </div>
                    </Link>
                    <Link to="#">
                        <div style={{ display: "flex" }}>
                            <div className='box pending' style={{ margin: 'auto', marginRight: '10px'}}></div>
                            <h6>Pending</h6>
                        </div>
                    </Link>
                    <Link to="#">
                        <div style={{ display: "flex" }}>
                            <div className='box failed' style={{ margin: 'auto', marginRight: '10px'}}></div>
                            <h6>Failed</h6>
                        </div>
                    </Link>
                </div>
            </div>

            <br />

            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    {/* <th scope="col">Title</th> */}
                    <th scope="col">Amount ₵</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">16/04/2024</td>
                    {/* <td>Iklina</td> */}
                    <td>35</td>
                    <td>Iklina</td>
                    <td>Successful</td>
                </tr>
                <tr>
                    <td scope="row">16/04/2024</td>
                    {/* <td>Iklina</td> */}
                    <td>425</td>
                    <td>AWS</td>
                    <td>Pending</td>
                </tr>
                
            </tbody>
        </table>
        </section>
    </main>
  )
}

export default Transaction