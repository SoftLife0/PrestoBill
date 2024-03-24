import React from 'react'
import LandingHeader from '../components/LandigHeader'
import herobg from '../assets/hero.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Landing() {
  return (
    <div>
      <LandingHeader />

      <section style={{marginTop:'7vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <br />
              <h6 style={{color:'#302cff'}}>Presto Solutions</h6>
              <h1 style={{ fontSize: '45px' }}>Got bills to pay? <br /> We've got you!</h1>
              <br />
              <h6 style={{textAlign:'justify'}} className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti veritatis modi voluptates, optio maxime consequatur sapiente magnam. Ipsam maxime totam incidunt autem ea vel dicta maiores perferendis similique deserunt.!</h6>
              <br />
              <div className="row" data-aos="fade-up" data-aos-delay="800">
                <div className="col-md-6" style={{ marginBottom: '2vh' }}>
                  <Link to="/dashboard" style={{ width: '100%' }}>
                    <button className="pill-button" style={{ width: '100%' }}>Go To Your Dashboard</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="8000">
              <img src={herobg} style={{ width: '100%' }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing