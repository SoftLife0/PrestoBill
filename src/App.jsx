import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JSimport Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Bill from './pages/Bill';
import AllBills from './pages/AllBills';
import Transaction from './pages/Transaction';



function App() { 
  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />         
            <Route exact path="/allBills" component={AllBills} />         
            <Route exact path="/bill" component={Bill} />         
            <Route exact path="/transaction" component={Transaction} />         
          </Switch>
      </main>
    </Router>  
  )
}

export default App
