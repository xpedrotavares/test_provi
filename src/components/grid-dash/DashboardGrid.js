import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from '../../assets/style.css';
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
    <div className={classes.root}>

      <Grid container spacing={3}>
      <aside>

</aside>
        <Grid item xs={4}>
          <Paper className={classes.paper}>

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
        <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
        <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
  
        
  
     
     
    </div>
  );
}
