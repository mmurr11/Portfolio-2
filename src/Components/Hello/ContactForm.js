import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useForm } from "@formspree/react";
import "./ContactForm.scss";

const SwipeableTemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [, handleSubmit] = useForm("myylqzwq");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <form
          className="wrapper"
          onSubmit={handleSubmit}
          style={{ maxHeight: "45vh" }}
        >
          <label className="emailLabel" htmlFor="email">
            Email
          </label>
          <input className="emailInput" type="email" name="email" />
          <button
            className="sendButton"
            type="submit"
            disabled={state.submitting}
          >
            Sign up
          </button>
        </form>
      </List>
    </Box>
  );

  return (
    <div className="container">
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="open-btn return"
            onClick={toggleDrawer(anchor, true)}
          >
            SAY HELLO
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SwipeableTemporaryDrawer;
