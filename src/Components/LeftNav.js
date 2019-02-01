import React from "react";
{
  /*import Drawer from "@material-ui/core/Drawer";*/
}
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import TopAppBar, { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import "@material/react-drawer/dist/drawer.css";
import QuickLinks from "./QuickLinks";

const styles = theme => ({
  root: {
    width: "100%"
  },
  container: {},
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
  direction: {
    rtl: theme.direction
  },
  item: {
    "&:hover": {
      backgroundColor: "rgba(249,206,0,0.3)"
    },
    "&$selected, &$selected:hover": {
      backgroundColor: "#f9be00"
    }
  }
});

function LeftNav(props) {
  const { classes } = props;
  const leftList = (
    <List style={{ flexGrow: 1, overflow: "auto", minHeight: 0 }}>
      {[
        "5 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan",
        "10 year plan",
        "15 year plan"
      ].map((text, index) => (
        <ListItem button key={text} className={classes.item}>
          <ListItemText primary={text} />
          <ListItemIcon className={classes.listItemIcon}>
            <ChevronRightIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
  const rightList = (
    <List>
      {["5 year plan", "10 year plan", "15 year plan"].map((text, index) => (
        <ListItem button key={text} className={classes.item}>
          <ListItemIcon>
            <ChevronLeftIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  let list = "";
  if (props.direction === "rtl") {
    list = rightList;
  } else {
    list = leftList;
  }

  const test = classes.direction;
  const t2 = props.direction;
  const t24 = props.dir;
  return (
    <div className={classes.root}>
      <TopAppBarFixedAdjust>
        <Drawer className={classes.drawer} dismissible open={props.isOpen}>
          <div className={classes.drawerContainer}>
            <div className={classes.drawerDiv}>
              <Paper className={classes.searchBox} elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
                <InputBase className={classes.searchInput} />
                <IconButton className={classes.iconButton} aria-label="Search">
                  <ClearIcon />
                </IconButton>
              </Paper>

              <Divider />
              {list}

              <Divider />

              <QuickLinks />
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
