import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.scss";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#ffb510",
    },
  },
});

function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [state, handleSubmit] = useForm("myylqzwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="open-btn return"
      >
        Open form dialog
      </Button>
      <ThemeProvider theme={outerTheme}>
        <form onSubmit={handleSubmit}>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ fontSize: "xx-large", color: "#e91e53" }}>
              Say Hello
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ fontSize: "large" }}>
                Thanks! I'll get in touch with you ASAP.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                name="email"
                htmlFor="email"
                required
                style={{ fontSize: "large" }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                style={{ fontSize: "large" }}
                errors={state.errors}
              />
              <TextField
                autoFocus
                margin="dense"
                id="message"
                label="Message"
                type="message"
                fullWidth
                variant="standard"
                name="message"
                style={{ fontSize: "large" }}
                htmlFor="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                style={{ fontSize: "large" }}
                errors={state.errors}
              />
            </DialogContent>
            <DialogActions>
              <Button style={{ fontSize: "large" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                style={{ fontSize: "large" }}
                disabled={state.submitting}
              >
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </ThemeProvider>
    </div>
  );
}

export default FormDialog;
