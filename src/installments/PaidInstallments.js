import React, { useState, useContext } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import style from '../assets/style/style.css';
// import UserPhoto from '../assets/images/Profile.jpg'

import { ApiDataContext, ApiDataProvider } from "../context/ApiDataContext";
// import style from '../assets/style/style.css';
// import UserPhoto from '../assets/images/Profile.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  


const PaidInstallments = () =>{
    const classes = useStyles();
    const [userData, setUserData] = useContext(ApiDataContext);
 

    return (
        <div>
        <div className='d-flex justify-content-start'>

        <h4 className='mb-4'>Faturas Pagas</h4>
        </div>
      {userData.map((item) =>
        item.installments.reverse().map((subItem, i) => (
            
          <div className="">
            <Paper className={`${classes.paper}`}>
            {/* <div className="ribbon ribbon-top-right"><span>Nao pago
                </span></div> */}
            <div className='d-flex flex-row justify-content-between'>
              <h5 className='value-intallment'>Valor: {subItem.formatedValue}</h5>
              <span className='dot-status-paid'></span>
              </div>
            <div className='d-flex'>
              <h6 className='due-date'>Vencimento: {subItem.dueDate}</h6>
            </div>
            <div className='d-flex flex-row justify-content-between'>
            <button className='btn-pay btn-14'>Recibo</button>
               {/* <p className='installments-counter'>{i + 7 }/7 </p>  */}
            </div>
            </Paper>
            <br />
          </div>
        ))
      )}
    </div>
    )
}

export default PaidInstallments;