import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
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

const buttonImage = [
  {
    src: "/images/Layout-full.svg",
    alt: "Full Width View"
  },
  {
    src: "/images/Layout-3quarters.svg",
    alt: "Three Quarters Width View"
  },
  {
    src: "/images/Layout-half.svg",
    alt: "Full Width View"
  },
  {
    src: "/images/Layout-quarter.svg",
    alt: "Full Width View"
  }
];

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
        <img
          src={buttonImage[i].src}
          width="30"
          height="20"
          alt={buttonImage[i].alt}
        />
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

ViewButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewButtons);
