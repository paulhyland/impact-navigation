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
    color: "black",
    zIndex: 1000
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

const customStyles = {
  container: (base, state) => ({
    ...base,
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent"
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    borderRadius: 0,
    border: 0,
    borderColor: state.isFocused ? "#666e76" : "#666e76",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#333" : "#333"
    }
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#333",
    backgroundColor: state.isSelected
      ? "#f9be00"
      : state.isFocused
      ? "rgba(249,206,0,0.3)"
      : "#efefef",
    ":active": {
      backgroundColor: state.isSelected ? "#f9be00" : "#efefef"
    }
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
    hyphens: "auto",
    // kill the gap
    marginTop: 0,
    textAlign: "left",
    // prevent menu to scroll y
    wordWrap: "break-word"
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};

const options = [
  { value: "vanilla", label: "English" },
  { value: "chocolate", label: "Math" },
  { value: "strawberry", label: "Psych" },
  { value: "blueberry", label: "Psychology" },
  { value: "banana", label: "Psychoanalysis" }
];

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <div className={classes.search}>
          <Select
            label="Unit Select"
            options={options}
            placeholder="Select a unit."
            styles={customStyles}
            className={classes.optionFont}
            elevation={0}
          />
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropDown);
