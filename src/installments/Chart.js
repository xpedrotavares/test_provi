import React, { useState, useEffect, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ApiDataContext, ApiDataProvider } from "../context/ApiDataContext";

const Chart = () => {
    const [chartData, setChartData] = useState({});
    const [userData, setUserData] = useContext(ApiDataContext);
    const chart = () => {
        
        setChartData({
            labels: ['A pagar', 'Pago', 'Juros acumulados'],
        datasets: [
            {
                label: 'Seu emprestimo em numeros',
                data: [`${userData[0].amountTaken}`, `${userData[0].amountPayd}`, `${userData[0].totalAmountInTaxes}`],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
            }
        ]
        })
    }

    useEffect(() => {
        chart()
        
    }, [])

    return (
        <div>
            
            <div>
                <Doughnut data={chartData} />
            </div>
        </div>
    )
}

export default Chart;