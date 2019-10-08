import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import "@material/react-drawer/dist/drawer.css";
import QuickLinks from "./QuickLinks";
import MainMenu from "./MainMenu";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    position: "absolute",
    top: 40,
    bottom: 0,
    height: "calc(100% - 40px)"
  },
  drawerContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%"
  },
  drawerDiv: {
    width: 250,
    backgroundColor: theme.palette.common.white,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    marginBottom: "0"
  },
  searchBox: {
    margin: "5px 4px 5px 7px ",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    borderRadius: 0
  },
  searchInput: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  listItemIcon: {
    margin: 0
  },
  mainMenuDiv: {
    flex: "0 1 calc(100% - 62px)",
    overflowY: "auto"
  },
  QuickLinksDiv: {
    flex: "grow"
  },
  direction: {
    rtl: theme.direction
  }
});

function LeftNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TopAppBarFixedAdjust>
        <Drawer
          modal={true}
          className={classes.drawer}
          dismissible
          open={props.isOpen}
        >
          <div className={classes.drawerContainer}>
            <div className={classes.drawerDiv}>
              {/*            <Paper className={classes.searchBox} elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
                <InputBase className={classes.searchInput} />
                <IconButton className={classes.iconButton} aria-label="Search">
                  <ClearIcon />
                </IconButton>
              </Paper>
              <Divider />
*/}

              <div className={classes.mainMenuDiv}>
                <MainMenu />
              </div>

              <Divider />
              <div className={classes.overflowDiv}>
                <QuickLinks />
              </div>
            </div>
          </div>
        </Drawer>
      </TopAppBarFixedAdjust>
    </div>
  );
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftNav);
