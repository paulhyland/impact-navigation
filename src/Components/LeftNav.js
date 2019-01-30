import React from "react";
import Drawer from "@material-ui/core/Drawer";
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
const styles = theme => ({
  root: {
    width: "100%"
  },
  drawerDiv: {
    width: 250,
    backgroundColor: theme.palette.common.white,
    height: "100vh"
  },
  textField: {
    margin: 5
  },
  direction: {
    rtl: theme.direction
  },
  item: {
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.25)
    },
    "&$selected, &$selected:hover": {
      backgroundColor: theme.palette.action.selected
    }
  },
  quickLinksText: {
    "&:selected": {
      backgroundColor: theme.palette.action.selected
    }
  },
  quickLinks: {
    bottom: 0,
    position: "absolute"
  }
});

function LeftNav(props) {
  const { classes } = props;
  const leftList = (
    <List>
      {["5 year plan", "10 year plan", "15 year plan"].map((text, index) => (
        <ListItem button key={text} className={classes.item}>
          <ListItemText primary={text} />
          <ListItemIcon>
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

  const fullList = (
    <div className={classes.fullList}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
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
      <Drawer open={props.left} onClose={props.toggleDrawer("left", false)}>
        <div className={classes.drawerDiv}>
          <TextField
            className={classes.textField}
            label="Filter"
            id="mui-theme-provider-standard-input"
            fillWidth
            margin="normal"
            variant="outlined"
          />

          <Divider />
          {list}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              overflow: "hidden"
            }}
          >
            <Divider />

            <List
              className={styles.quickLinks}
              subheader={
                <ListSubheader component="div">Quick Links</ListSubheader>
              }
            >
              {["Add New Goal", "Add New Result"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  className={styles.quickLinksText}
                  selected={index + (1 % 1) === 0 ? true : false}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftNav);
