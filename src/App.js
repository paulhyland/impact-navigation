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
import theme from "./theme.js";

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

App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(theme)(App);
