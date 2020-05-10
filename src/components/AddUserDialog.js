import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import fb from "../config/fb";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createUser = (email, password) => {};

  return (
    <div>
      <Button color="default" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the informations of the new user.
          </DialogContentText>
          <TextField autoFocus label="Email Address" type="email" fullWidth />
          <TextField autoFocus label="Password" type="text" fullWidth />
          <TextField autoFocus label="Class" type="text" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel [x]
          </Button>
          <Button onClick={handleClose} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
