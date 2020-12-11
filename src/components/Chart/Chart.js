import React, { useState, useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { InstallmentDataContext } from "../../context/InstallmentDataContext";

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [installmentData] = useContext(InstallmentDataContext);

  useEffect(() => {
    setChartData({
      labels: ["A pagar", "Pago", "Juros acumulados"],
      datasets: [
        {
          label: "Seu emprestimo em numeros",
          data: [
            `${installmentData.amountTaken}`,
            `${installmentData.amountPayd}`,
            `${installmentData.totalAmountInTaxes}`,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
  }, [installmentData]);

  return (
    <div>
      <div>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
