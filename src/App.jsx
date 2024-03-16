import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JSimport Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Bill from './pages/Bill';
import AllBills from './pages/AllBills';



function App() { 
  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />         
            <Route exact path="/AllBills" component={AllBills} />         
            <Route exact path="/bill" component={Bill} />         
          </Switch>
      </main>
    </Router>  
  )
}

export default App
