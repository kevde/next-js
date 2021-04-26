import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import Head from 'next/head'
import Form from '../component/Form';
import NavbarComponent from '../component/Navbar';
import PositionsTable from '../component/PositionsTable';
import Table from '../component/Table';
import styles from '../styles/Home.module.css';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "hsl(4deg 72% 60%)"
    },
    secondary: {
      main: "#fff"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        background: "white",
        borderRadius: "4px",
      }
    },
    MuiTypography: {
      h3: {
        fontSize: "24px"
      },
      h4: {
        color:"#bbb",
        fontSize: "18px",
        textTransform: "uppercase"
      }
    }
  }
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" />
      </Head>
      <ThemeProvider theme={mainTheme}>
        <NavbarComponent />
        <Grid container direction="row"
        spacing={2}
        alignItems="center"
        justify="center">
          <Grid item md="12">
            <Form />
          </Grid>
          <Grid item md="8">
            <Table />
          </Grid>
          <Grid item md="8">
            <PositionsTable />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}
