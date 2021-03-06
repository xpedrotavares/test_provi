import React from "react";

import Chart from "../Chart/Chart";
import DueInstallments from "../../installments/DueInstallments";
import PaidInstallments from "../../installments/PaidInstallments";
import Profile from "../Profile/Profile";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

export default function DashboardGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="div-dashboard-grid">
      <Grid className="mt-0" container spacing={0}>
        <Profile />
        <Grid item xs={2}></Grid>
        <Grid className="due-installments-grid mr-5 mt-5" item xs={4}>
          <Paper className={`${classes.paper} due-installments-paper`}>
            <DueInstallments />
          </Paper>
        </Grid>
        <Grid className="ml-5 mt-5" item xs={4}>
          <Paper className={`${classes.paper} chart-paper`}>
            <div className="d-flex justify-content-start">
              <h4>Seu empréstimo em números</h4>
            </div>
            <Paper className={classes.paper}>
              <Chart />
            </Paper>
          </Paper>
          <Paper className={`${classes.paper} paid-installments-grid mt-5`}>
            <PaidInstallments />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
