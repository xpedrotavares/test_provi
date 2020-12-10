import React from 'react';
import DashboardGrid from './components/grid-dash/DashboardGrid'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar'
// import Profile from './components/Profile'
// import style from './assets/style.css';
// import getApiData from './api/api'
// import axios from 'axios'
import { ApiDataProvider } from './context/ApiDataContext'
// import DueInstallments from './installments/DueInstallments';


function App() {
  
  return (
    <ApiDataProvider>
      <Navbar/>
      <DashboardGrid/>
      </ApiDataProvider>
  );
}

export default App;
