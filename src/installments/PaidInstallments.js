import React, { useContext } from "react";

import { ApiDataContext } from "../context/ApiDataContext";

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    elevation: 4,
  },
}));

const PaidInstallments = () => {
  const classes = useStyles();
  const [userData] = useContext(ApiDataContext);

  return (
    <div>
      <div className="d-flex justify-content-start">
        <h4 className="mb-4">Faturas Pagas</h4>
      </div>
      {userData.map((item) =>
        item.installments.reverse().map((subItem, i) => (
          <div key={i} className="">
            <Paper key={item} className={`${classes.paper}`}>
              <div
                key={subItem.formatedValue}
                className="d-flex flex-row justify-content-between"
              >
                <h5 className="value-intallment">
                  Valor: {subItem.formatedValue}
                </h5>
                <span className="dot-status-paid"></span>
              </div>
              <div key={subItem.dueDate} className="d-flex">
                <h6 className="due-date">Vencimento: {subItem.dueDate}</h6>
              </div>
              <div
                key={i + 1}
                className="d-flex flex-row justify-content-between"
              >
                <button className="btn-receipt btn-14">Recibo</button>
              </div>
            </Paper>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default PaidInstallments;
