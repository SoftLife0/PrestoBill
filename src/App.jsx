import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JSimport Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Bills from './pages/Bills';



function App() { 
  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />         
            <Route exact path="/bills" component={Bills} />         
          </Switch>
      </main>
    </Router>  
  )
}

export default App
