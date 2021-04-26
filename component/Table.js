import { AppBar, Button, Card, Grid, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme) => ({
  menuButton: {
    color: "green"
  },
  card: {
    padding: "10px",
    marginTop: "-100px",
  },
  box: {
    padding: "10px",
  }
});

class Table extends React.Component {

  renderItem(label, value) {
    const { classes } = this.props;
    return (
      <Grid item sm="4" spacing={2} className={classes.box}>
      <Typography variant="h4" className={classes.label}>
        {label}
          </Typography>
      <Typography variant="body">
        {value}
      </Typography>
    </Grid>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Grid container>
          {this.renderItem("UMA Price", "$24.00")}
          {this.renderItem("Total Value Locked", "$178, 000 000.25")}
          {this.renderItem("Contracts Created", "58")}
          {this.renderItem("Market Capped", "$ 437 000, 000")}
          {this.renderItem("Synthetics Minted", "600, 000")}
          {this.renderItem("Positions Opened", "350")}
        </Grid>
      </Card>)
  }
}

export default withStyles(styles)(Table);