import React from 'react'
import { Receipt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';


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
                    <a href="#">
                        <button className='pill-button'>Add New Expense</button>
                    </a>
                </div>
                <div className='row'>

                </div>    
            </div>  
        </section>
    </main>
  )
}

export default Bills