import React, { useContext } from "react";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import { logout } from "../firebase/auth";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function NavBar({ title }) {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            logout().then(() => {
              setUser(null);
              history.push("/");
            });
          }}
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
