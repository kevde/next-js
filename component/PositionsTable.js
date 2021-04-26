import { Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from "@material-ui/core";
import React from "react";

const styles = () => ({
  menuButton: {
    color: "green"
  },
  bolded: {
    fontWeight: "700"
  },
  position: {
    paddingTop: "20px"
  }
});

class PositionsTable extends React.Component {
  state = {
    positions: [
      { address: "0xAdB4...93bD9f", collateral: "9500", currency: "ETH", amount: "20, 000", asset: "yUSD", ratio: "140%" },
      { address: "0xAdB4...93bD9f", collateral: "9500", currency: "ETH", amount: "20, 000", asset: "yUSD", ratio: "140%" },
      { address: "0xAdB4...93bD9f", collateral: "9500", currency: "ETH", amount: "20, 000", asset: "yUSD", ratio: "140%" },
      { address: "0xAdB4...93bD9f", collateral: "9500", currency: "ETH", amount: "20, 000", asset: "yUSD", ratio: "140%" },
    ]
  }

  renderPosition = () => {
    return (
      <Grid item sm="4">
        <Typography variant="h3">
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
      <>
        <Grid container spacing={5}>
          <Grid item>
            <Typography variant="h3" className={classes.position}>Latest Positions</Typography>
          </Grid>
          <Grid item>
            <Card>
              <TableContainer component={Card} md="12">
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.bolded} component="th" >Sponsor address</TableCell>
                      <TableCell className={classes.bolded} align="right">Collateral Amount</TableCell>
                      <TableCell className={classes.bolded} align="right">Collateral currency</TableCell>
                      <TableCell className={classes.bolded} align="right">Synthetic amount</TableCell>
                      <TableCell className={classes.bolded} align="right">Synthetic asset</TableCell>
                      <TableCell className={classes.bolded} align="right">Collateral Ratio</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.positions.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.address}
                        </TableCell>
                        <TableCell align="right">{row.collateral}</TableCell>
                        <TableCell align="right">{row.currency}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.asset}</TableCell>
                        <TableCell align="right">{row.ratio}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </>)
  }
}

export default withStyles(styles)(PositionsTable);