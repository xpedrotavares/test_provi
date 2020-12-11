import React from 'react';
import DashboardGrid from './components/grid-dash/DashboardGrid'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar'
// import Profile from './components/Profile'
// import style from './assets/style.css';
// import getApiData from './api/api'
// import axios from 'axios'
import { ApiDataProvider } from './context/ApiDataContext'
import { InstallmentDataProvider } from './context/InstallmentDataContext'
// import DueInstallments from './installments/DueInstallments';


function App() {
  
  return (
    <InstallmentDataProvider>

    <ApiDataProvider>
      <Navbar/>
      <DashboardGrid/>
      </ApiDataProvider>
    </InstallmentDataProvider>
  );
}

export default App;
