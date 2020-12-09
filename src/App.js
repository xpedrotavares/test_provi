import React from 'react';
import DashboardGrid from './components/grid-dash/DashboardGrid'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar'
import Profile from './components/Profile'
import style from './assets/style.css';
import api from './api/api'
function App() {
  return (
  
    <div>
      
      <Navbar/>
      <DashboardGrid/>
    </div>
   
  );
}

export default App;
