import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select, { components } from "react-select";
import classNames from "classnames";
import ViewButtons from "./ViewButtons";
import DropDown from "./DropDown";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%",
    zIndex: 1000
  },
  grow: {
    flexGrow: 1
  },
  topBar: {
    backgroundColor: "#666e76",
    height: "40px",
    minHeight: "40px",
    display: "flex"
  },

  menuButton: {
    marginLeft: -18,
    marginRight: -2
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    },
    color: "black"
  },
  optionFont: {
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      color: "#333",
      backgroundColor: "#f9be00"
    }
  },

  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },

  dropdownStyle: {
    "&:focus": {
      backgroundColor: "#f9be00"
    }
  }
});

const selectedItemStyles = {
  backgroundColor: "#f9be00"
};

const options = [
  { value: "chocolate", label: "Math" },
  { value: "strawberry", label: "Psych" },
  { value: "strawberry", label: "Psychology" },
  { value: "strawberry", label: "Psychoanalysis" },
  { value: "vanilla", label: "English" }
];

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="relative" className={classes.topBar}>
          <Toolbar className={classes.topBar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open Menu"
              onClick={this.props.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.grow}>
              <DropDown />
            </div>
            <ViewButtons />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopHeader);
