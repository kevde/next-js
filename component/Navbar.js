import { AppBar, Button, Grid, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme) => ({
  menuButton: {
    color: "green"
  },
  appBar: {
    background: "white"
  },
  logo: {
    fontFamily: "Zen Dots",
    fontSize: "30px"
  }
});

class NavbarComponent extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center" direction="row">
            <Grid item>
              <Typography variant="h1" color="primary" className={classes.logo}>UMA</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} direction="row">
                <Grid item>
                  <Typography variant="h6" className={classes.title}>Home</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.title}>Projects</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.title}>Docs</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.title}>Resources</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>)
  }

}

export default withStyles(styles)(NavbarComponent);