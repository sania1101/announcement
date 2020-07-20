import React from 'react';
import 'materialize-css'
import {BrowserRouter as Router}from 'react-router-dom'
import './App.css';
import {useRouts} from './routs' 
import { Navbar } from './components/NavBar';

function App() {


  const routs = useRouts()
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <div className='container'>
          <h1>
            {routs}
          </h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
