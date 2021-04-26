import { FormControl, Grid, Input, TextField, Typography, withStyles } from "@material-ui/core";
import React from "react";
const styles = (theme) => ({
  form: {
    backgroundColor: theme.palette.primary.main,
    marginTop:"0px",
    paddingTop:"20px",
    paddingBottom:"120px",
  },
  header: {
    color: "white",
  }
});
class Form extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container
        className={classes.form}
        direction="row"
        justify="center"
        spacing={2}>
        <Grid item md="8">
          <Typography variant="h3" className={classes.header}>The UMA Contract Explorer</Typography >
        </Grid>
        <Grid item md="8">
          <TextField fullWidth variant="outlined" color="secondary" />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form);