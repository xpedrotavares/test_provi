import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from '../../assets/style.css';
import Profile from '../Profile'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DashboardGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="div-dashboard-grid">

      <Grid className="mt-0" container spacing={0}>
      <Profile/>
        <Grid item xs={2}>

        </Grid>

        <Grid className="due-installments-grid mr-5 mt-5" item xs={4}>
          <Paper className={`${classes.paper} due-installments-paper`}>

          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
           <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
       
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper> 

          </Paper>
        </Grid>
        <Grid className="ml-5 mt-5" item xs={4}>
        <Paper className={`${classes.paper} chart-paper`}>
        <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          
        </Paper>
        <Paper className={`${classes.paper} paid-installments-grid mt-5`}>
        <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
          <br/>
          <Paper className={classes.paper}></Paper>
        </Paper>
        </Grid>
      </Grid>
  
        
  
     
     
    </div>
  );
}
