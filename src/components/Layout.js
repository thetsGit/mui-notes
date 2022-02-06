import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreateIcon from "@material-ui/icons/Create";
import SubjectIcon from "@material-ui/icons/Subject";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { format } from "date-fns";
import ToolBar from "@material-ui/core/ToolBar";
import { grey } from "@material-ui/core/colors";
import harryImage from "../images/harryPotter.jpg";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    paper: {
      width: drawerWidth,
      boxShadow: "0 0 2px 1px #0001",
    },
    drawer: {
      width: drawerWidth,
    },
    content: {
      backgroundColor: "#f4f4f4",
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    active: {
      background: "#f4f4f4",
    },
    drawerTitle: {
      margin: theme.spacing(2),
      fontWeight: "bold",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: {
      backgroundColor: "#fff",
      color: grey,
    },
    block: theme.mixins.toolbar,
  };
});
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "notes",
      path: "/",
      icon: <CreateIcon color="primary" />,
    },
    {
      text: "create a new note",
      path: "/create",
      icon: <SubjectIcon color="primary" />,
    },
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.paper }}
        anchor="left"
      >
        <Typography variant="h5" className={classes.drawerTitle}>
          My Notes
        </Typography>
        <List>
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.text}
              button
              onClick={() => navigate(menuItem.path)}
              className={
                location.pathname === menuItem.path ? classes.active : null
              }
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.content}>
        <AppBar elevation={0} className={classes.appbar}>
          <ToolBar className={classes.toolbar}>
            <Typography
              variant="body1"
              color="secondary"
              style={{ marginRight: "auto" }}
            >
              Today is the {format(new Date(), "do MMMM, Y")}
            </Typography>
            <Typography variant="body1" color="secondary">
              Harry
            </Typography>
            <Avatar
              src={harryImage}
              alt="harry potter photo"
              style={{ marginLeft: 16 }}
            />
          </ToolBar>
        </AppBar>
        <div className={classes.block}></div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
