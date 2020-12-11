import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import DueInstallments from "../installments/DueInstallments";
export const ApiDataContext = createContext();

export const ApiDataProvider = (props) => {
  const [userData, setUserData] = useState([]);

  const api_url = "http://www.mocky.io/v2/5c923b0932000029056bce39";

  async function getApiData() {
    const response = await axios.get(api_url);
    setUserData([response.data],
      
      {
        userId: response.data.UserId,
        amountPayd: response.data.amountPayd,
        amountTaken: response.data.amountTaken,
        totalAmountInTaxes: response.data.totalAmountInTaxes,
        // installment: response.data.installments
      }
      
      );
  }
  
  useEffect(() => {
    getApiData();
  }, []);
  // console.log('aqui =>' + userData.installments)
//   console.log(userData[0].amountTaken)
  


  return (
    <ApiDataContext.Provider value={[userData, setUserData]}>
      {props.children}
    </ApiDataContext.Provider>
  );
};
