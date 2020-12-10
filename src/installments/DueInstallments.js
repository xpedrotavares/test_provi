import { Paper } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import style from '../assets/style/style.css';
// import UserPhoto from '../assets/images/Profile.jpg'

import { ApiDataContext, ApiDataProvider } from "../context/ApiDataContext";

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

const DueInstallments = () => {
  const classes = useStyles();
  const [userData, setUserData] = useContext(ApiDataContext);

  return (
    <div>
      {userData.map((item) =>
        item.installments.map((subItem) => (
          <div>
            <Paper className={classes.paper}>
              <h6>{subItem.formatedValue}</h6>
            </Paper>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default DueInstallments;
