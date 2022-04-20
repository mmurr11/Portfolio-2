import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import PropTypes from "prop-types";
import { useForm, ValidationError } from "@formspree/react";
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

  const useClickAway = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setState({ bottom: false });
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null);
    useClickAway(wrapperRef);
    if (state.bottom === true) {
      return <div ref={wrapperRef}>{props.children}</div>;
    } else return null;
  };

  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          borderRadius: "12px",
        }}
      >
        <form onSubmit={handleSubmit} className="wrapper">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
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
            onClick={toggleDrawer(anchor, true)}
            onOpen={toggleDrawer(anchor, true)}
            onEscapeKeyDown={toggleDrawer(anchor, false)}
            transitionDuration={{
              appear: 400,
              enter: 500,
              exit: 0,
            }}
          >
            <OutsideAlerter>{list(anchor)}</OutsideAlerter>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SwipeableTemporaryDrawer;
