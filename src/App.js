import React from "react";

import Style from './assets/style.css'
import "bootstrap/dist/css/bootstrap.css";


import { InstallmentDataProvider } from "./context/InstallmentDataContext";
import { ApiDataProvider } from "./context/ApiDataContext";
import Navbar from "./components/Navbar/Navbar";
import DashboardGrid from "./components/grid-dashboard/DashboardGrid";

function App() {
  return (
    <InstallmentDataProvider>
      <ApiDataProvider>
        <Navbar />
        <DashboardGrid />
      </ApiDataProvider>
    </InstallmentDataProvider>
  );
}

export default App;
