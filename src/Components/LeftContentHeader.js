import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%",
    flexGrow: 1,
    zIndex: 1
  },
  margin: {
    margin: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  topBar: {
    height: "40px",
    minHeight: "40px"
  },
  h3: {
    fontSize: "1.2em"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  textButton: {
    fontSize: "1em",
    margin: "3px 0 3px 14px",
    textTransform: "capitalize",
    borderRadius: 5,
    padding: "0px",
    "&:hover": {
      color: "#333",
      backgroundColor: "#f9be00"
    }
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  instructionsContent: {
    flexGrow: 1,
    visibility: "visible",
    backgroundColor: "#aacbc8",
    fontSize: ".95em",
    padding: theme.spacing.unit * 3,
    position: "relative",
    display: "none"
  },
  instructionsParagraph: {
    margin: 0,
    paddingRight: theme.spacing.unit * 8
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing.unit * 1.5,
    right: theme.spacing.unit * 1.5
  }
});

class LeftContentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: props.viewState,
      viewState: props.viewState
    };
  }

  handleClick() {
    if (document.getElementById("instructions").style.display !== "block") {
      document.getElementById("instructions").style.display = "block";
    } else {
      document.getElementById("instructions").style.display = "none";
    }
  }

  render() {
    const { classes } = this.props;
    const valueState = this.props.viewState;
    const value2 = this.state.viewState;
    const valueUse = value2;
    const { value } = this.state;
    const viewState = this.state.viewState;
    return (
      <div className={classes.root}>
        <AppBar position="relative">
          <Toolbar className={classes.topBar}>
            <Typography variant="h3" color="inherit" className={classes.h3}>
              Form Title
            </Typography>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              className={classes.button}
              aria-label="Info"
              onClick={this.handleClick}
            >
              <InfoOutlined />
            </IconButton>
            <Button color="inherit" className={classes.textButton}>
              Cancel
            </Button>
            <Button color="inherit" className={classes.textButton}>
              Save
            </Button>
            <Button color="inherit" className={classes.textButton}>
              Submit
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.instructionsContent} id="instructions">
          <Typography paragraph className={classes.instructionsParagraph}>
            Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
            leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis
            tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
            commodo odio aenean sed adipiscing.
          </Typography>
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            className={classes.closeButton}
            aria-label="Close"
            onClick={this.handleClick}
          >
            <Close />
          </IconButton>
        </div>
        <main className={classes.content}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    );
  }
}

LeftContentHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftContentHeader);
