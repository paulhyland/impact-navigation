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
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import LensIcon from "@material-ui/icons/LensOutlined";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select, { components } from "react-select";
import classNames from "classnames";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  topBar: {
    backgroundColor: "#666e76",
    height: "40px",
    minHeight: "40px"
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
    fontFamily: theme.typography.fontFamily
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
  buttonGroupClass: {
    height: 40,
    marginRight: -24,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  viewButtonClass: {
    backgroundColor: "#666e76",
    paddingTop: 10,
    paddingBottom: 6,
    width: 50,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.up("md")]: {
      width: 60,
      paddingLeft: 15,
      paddingRight: 15
    },
    opacity: 0.6,
    display: "inline-block",
    position: "relative"
  },
  viewHighlightClass: {
    height: 4,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0
  },
  activeButton: {
    backgroundColor: "#333e48",
    opacity: 1
  },
  activeHighlight: {
    backgroundColor: "#f9be00"
  }
});

const options = [
  { value: "chocolate", label: "Math" },
  { value: "strawberry", label: "Psych" },
  { value: "strawberry", label: "Psychology" },
  { value: "strawberry", label: "Psychoanalysis" },
  { value: "vanilla", label: "English" }
];

const buttonImage = [
  "/images/Layout-full.svg",
  "/images/Layout-3quarters.svg",
  "/images/Layout-half.svg",
  "/images/Layout-quarter.svg"
];

function ViewButton(props) {
  let buttonClass = classNames(classes.viewButtonClass);
  let highlightClass = classNames(classes.viewHighlightClass);

  if (this.props.value) {
    buttonClass = classNames(classes.viewButtonClass, classes.activeButton);
    highlightClass = classNames(
      classes.viewHighlightClass,
      classes.activeHighlight
    );
  }

  return (
    <div className={classes.viewButtonClass} onClick={props.onClick}>
      <img src={buttonImage[i]} width="30" height="20" />
      <div className={classes.viewHighlightClass} />
    </div>
  );
}

class ViewButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: Array(4).fill(false)
    };
  }

  handleClick(i) {
    const isActive = this.state.isActive.slice();
    isActive[0] = false;
    isActive[1] = false;
    isActive[2] = false;
    isActive[3] = false;
    isActive[i] = true;

    this.setState({
      isActive: isActive
    });
  }

  renderButton(i) {
    const { classes } = this.props;

    let buttonClass = classNames(classes.viewButtonClass);
    let highlightClass = classNames(classes.viewHighlightClass);

    if (this.state.isActive[i]) {
      buttonClass = classNames(classes.viewButtonClass, classes.activeButton);
      highlightClass = classNames(
        classes.viewHighlightClass,
        classes.activeHighlight
      );
    }

    return (
      <div className={buttonClass} onClick={() => this.handleClick(i)}>
        <img src={buttonImage[i]} width="30" height="20" />
        <div className={highlightClass} />
      </div>
    );
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.setState({ viewState: value });
    this.props.setViewState(value);
  };

  setViewState = value => () => {
    this.setState({
      selectedIndex: value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.buttonGroupClass}>
        {this.renderButton(0)}
        {this.renderButton(1)}
        {this.renderButton(2)}
        {this.renderButton(3)}
      </div>
    );
  }
}

ViewButton.propTypes = {
  classes: PropTypes.object.isRequired
};

ViewButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewButtons);
