import React from 'react'
import { Form, Button } from 'react-bootstrap';
import softlife from '../assets/softlife.png'
import Header from '../components/Header'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';


function AddExpenses() {
  return (
    <section>
      <Header />
    <div className="container">
    <div className="row" style={{ justifyContent: 'space-around', marginTop: '5vh' }}>
        <div className="col-md-6">
            <div className="defaultCard">
            
                <Form>
                    <div className="ellipse" style={{ borderRadius: '50%', overflow: 'hidden', margin: 'auto', backgroundColor: 'rgb(48, 44, 255)' }}>
                      <img src={softlife} alt="User Profile" />          
                    </div>

                    
                    <h4 style={{ textAlign: 'center', marginTop: '5vh' }}>Expense Entry Page</h4>
                    <p style={{ textAlign: 'center', width: '100%' }}>Kindlt fill this form </p>

                    <FloatingLabel controlId="floatingSelect m-3" label="Select a Vendor">
                      <Form.Select aria-label="Floating label select example">
                        <option>--select vendor--</option>
                        <option value="1">Iklina</option>
                        <option value="2">Mohammed</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br />
                    <FloatingLabel controlId="floatingPassword" label="Amount">
                      <Form.Control type="text" placeholder="amount" />
                    </FloatingLabel>
                    <br />
                    <FloatingLabel controlId="floatingPassword" label="Reference">
                      <Form.Control type="text" placeholder="Reference" />
                    </FloatingLabel>

                    <Button type="submit" className="pill-button" style={{ width: '100%', marginTop: '5vh' }}>Submit</Button>
                </Form>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default AddExpenses