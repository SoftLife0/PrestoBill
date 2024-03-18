import React from 'react'
import Header from '../components/Header';
import BillCard from '../components/BillCard';


function AllBills({showHeader = true, showTitle = true}) {
  return (
    <main>

        {showHeader && <Header/>}

        <section>
        <div className="container">
          {showTitle && (
            <h5 className='text-muted' style={{ fontWeight: "500", marginTop: '7vh' }}>All Bills</h5>
          )}
          <div className="row">
            <BillCard
              to="/bill"
              title="Iklina"
              amountPaid={0}
              totalAmount={867}
              progress="30%"
            />
            <BillCard
              to="#"
              title="AWS Server Bill"
              amountPaid={0}
              totalAmount={300}
              progress="0%"
            />
            <BillCard
              to="#"
              title="Transportation"
              amountPaid={0}
              totalAmount={500}
              progress="70%"
            />
            <BillCard
              to="#"
              title="Others"
              amountPaid={0}
              totalAmount={8000}
              progress="50%"
            />
          </div>
        </div> 
        </section>
    </main>
  )
}

export default AllBills