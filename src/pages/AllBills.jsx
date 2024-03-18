import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BillCard from '../components/BillCard';

function AllBills({ showHeader = true, showTitle = true }) {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://prestoghana.com/api/bills')
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched data
        setBills(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
      {showHeader && <Header />}
      <section>
        <div className="container">
          {showTitle && (
            <h5 className='text-muted' style={{ fontWeight: "500", marginTop: '7vh' }}>All Bills</h5>
          )}
          <div className="row">
            {bills.map(bill => (
              <BillCard
                key={bill.id}
                title={bill.name}
                amountPaid={0}
                totalAmount={bill.amount}
                progress="30%" 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllBills;


// <div className="row">
//             <BillCard
//               to="/bill"
//               title="Iklina"
//               amountPaid={0}
//               totalAmount={867}
//               progress="30%"
//             />