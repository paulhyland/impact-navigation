import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import TopHeader from "./Components/TopHeader";
import LeftNav from "./Components/LeftNav";
import LeftContentHeader from "./Components/LeftContentHeader";

const green = createMuiTheme({
  fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  palette: {
    primary: {
      light: "#42948b",
      main: "#00665e",
      dark: "#003b34",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ff997f",
      main: "#eb6852",
      dark: "#b33728",
      contrastText: "#000000"
    }
  },
  overrides: {
    LeftNav: {
      drawerDiv: {
        backgroundColor: "#00665e",
        width: 300
      }
    }
  }
});

const orange = createMuiTheme({
  palette: {
    primary: {
      light: "#fff04e",
      main: "#f9be00",
      dark: "#c18e00",
      contrastText: "#000000"
    },
    secondary: {
      light: "#87f4ff",
      main: "#rec1e0",
      dark: "#0090ae",
      contrastText: "#000000"
    }
  },
  direction: "rtl"
});

const theme = green;

const styles = theme => ({
  typography: {
    useNextVariants: true,
    fontSize: 24,
    // Use the system font instead of the default Roboto font.
    htmlFontSize: 100,
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      selectedIndex: 0
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  setViewState(value) {
    this.setState({
      selectedIndex: value
    });
  }

  render() {
    const value = this.state.selectedIndex;
    const dir = theme.direction;
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <div dir={theme.direction}>
            <CssBaseline />
            <TopHeader
              toggleDrawer={this.toggleDrawer.bind(this)}
              setViewState={this.setViewState.bind(this)}
              viewState={this.state.selectedIndex}
            />
            <LeftNav
              isOpen={this.state.isOpen}
              left={this.state.left}
              toggleDrawer={this.toggleDrawer.bind(this)}
              direction={dir}
            />
            <LeftContentHeader />
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
