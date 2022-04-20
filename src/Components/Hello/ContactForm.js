import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useForm, FormspreeProvider, ValidationError } from "@formspree/react";
import "./ContactForm.scss";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#ffb510",
    },
  },
});

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [state, handleSubmit] = useForm("contactForm");
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
        SAY HELLO
      </Button>
      <ThemeProvider theme={outerTheme}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{ fontSize: "xx-large", color: "#e91e53" }}>
            Say Hello
          </DialogTitle>
          <form onSubmit={handleSubmit} className="contact">
            <DialogContent>
              <TextField
                autoFocus
                variant="standard"
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                name="email"
                required
                style={{ fontSize: "large" }}
                htmlFor="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <TextField
                autoFocus
                variant="standard"
                margin="dense"
                id="message"
                label="Message"
                type="message"
                fullWidth
                name="message"
                style={{ fontSize: "large" }}
                required
                htmlFor="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </DialogContent>
            <DialogActions>
              <Button style={{ fontSize: "large" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={state.submitting}
                style={{ fontSize: "large" }}
              >
                Send
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

const ContactForm = () => {
  return (
    <FormspreeProvider project="1925441084775726835">
      <FormDialog />
    </FormspreeProvider>
  );
};

export default ContactForm;
