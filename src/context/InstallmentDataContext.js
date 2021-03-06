import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const InstallmentDataContext = createContext();

export const InstallmentDataProvider = (props) => {
  const [installmentData, setInstallmentData] = useState([]);

  const api_url = "http://www.mocky.io/v2/5c923b0932000029056bce39";

  async function getInstallmentData() {
    const response = await axios.get(api_url);
    setInstallmentData({
      userId: response.data.UserId,
      amountPayd: response.data.amountPayd,
      amountTaken: response.data.amountTaken,
      totalAmountInTaxes: response.data.totalAmountInTaxes,
    });
  }

  useEffect(() => {
    getInstallmentData();
  }, []);

  return (
    <InstallmentDataContext.Provider
      value={[installmentData, setInstallmentData]}
    >
      {props.children}
    </InstallmentDataContext.Provider>
  );
};
