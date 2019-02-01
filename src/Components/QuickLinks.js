import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import classNames from "classnames";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  quickLinks: {
    marginLeft: 0,
    backgroundColor: "rgba(0, 0, 0, 0.06)"
  },
  quickLinksItem: {
    "&:selected": {
      backgroundColor: theme.palette.action.selected
    }
  },
  quickLinksText: {
    paddingLeft: 0
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class QuickLinks extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List
          component="nav"
          className={classes.quickLinks}
          style={{ flexGrow: 1, overflow: "auto", minHeight: 0 }}
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemText
              inset
              primary="Quick Links"
              style={{ paddingLeft: 0 }}
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Add New Goal", "Add New Result"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  className={classNames(classes.quickLinksItem, classes.nested)}
                >
                  <ListItemText
                    inset
                    primary={text}
                    style={{ paddingLeft: 0 }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

QuickLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuickLinks);
