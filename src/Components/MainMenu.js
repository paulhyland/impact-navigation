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
import LeftNavMain from "../Data/LeftNavMain";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.common.white
  },
  mainLinks: {
    marginLeft: 0,
    backgroundColor: theme.palette.common.white,
    flexGrow: 1,
    overflow: "auto",
    minHeight: 0
  },
  mainLinksCategory: {
    "&:hover": {
      backgroundColor: "rgba(249,206,0,0.3)"
    }
  },
  mainLinksItem: {
    "&:hover": {
      backgroundColor: "rgba(249,206,0,0.3)"
    },
    "&:selected": {
      backgroundColor: "#f9be00"
    }
  },
  mainLinksText: {
    paddingLeft: 0
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class MainMenu extends React.Component {
  state = {
    open: false,
    selectedIndex: null,
    openIndex: null
  };

  handleClick = (event, index) => {
    const isSelected = this.state.selectedIndex == index;
    const isOpen = this.state.openIndex == index;
    isSelected
      ? this.setState({ selectedIndex: null })
      : this.setState({ selectedIndex: index });
    isOpen
      ? this.setState({ openIndex: null })
      : this.setState({ openIndex: index });
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav" className={classes.mainLinks}>
          {LeftNavMain.map((leftNavEntry, index) => {
            const isSelected = this.state.selectedIndex == index;
            const isArray = Array.isArray(leftNavEntry.value);
            const isOpen = this.state.openIndex == index;
            return (
              <React.Fragment>
                <ListItem
                  button={true}
                  key={leftNavEntry.label}
                  className={classes.mainLinksCategory}
                  onClick={event => this.handleClick(event, index)}
                >
                  <ListItemText
                    inset={true}
                    primary={leftNavEntry.label}
                    style={{ paddingLeft: 0 }}
                  />

                  {isArray && isSelected ? (
                    <ExpandLess />
                  ) : isArray ? (
                    <ExpandMore />
                  ) : null}
                </ListItem>

                {isArray ? (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {leftNavEntry.value.map((itemEntry, index) => (
                        <ListItem
                          button
                          key={itemEntry.label}
                          className={classNames(
                            classes.mainLinksItem,
                            classes.nested
                          )}
                        >
                          <ListItemText
                            inset
                            primary={itemEntry.label}
                            style={{ paddingLeft: 0 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                ) : null}
              </React.Fragment>
            );
          })}
        </List>
      </div>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainMenu);
