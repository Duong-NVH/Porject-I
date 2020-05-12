import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import fb from "../config/fb";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userClass, setUserClass] = React.useState("STAFF");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeClass = (e) => {
    setUserClass(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createUser = (name, email, password, userClass) => {
    // let userID = "";
    // fb.auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     fb.auth().onAuthStateChanged((user) => {
    //       userID = user.uid;
    //       fb.firestore().collection("Users").doc(userID).set({
    //         name,
    //         email,
    //         password,
    //         userClass,
    //         id: userID,
    //       });
    //     });
    //   });
  };

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
          <Select
            autoFocus
            label="Class"
            value={userClass}
            onChange={handleChangeClass}
          >
            <MenuItem value={"STAFF"}>STAFF</MenuItem>
            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
          </Select>
          <TextField
            autoFocus
            label="Name"
            type="text"
            onChange={handleChangeName}
            fullWidth
          />
          <TextField
            autoFocus
            label="Email Address"
            type="email"
            onChange={handleChangeEmail}
            fullWidth
          />
          <TextField
            autoFocus
            label="Password"
            type="text"
            onChange={handleChangePassword}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel [x]
          </Button>
          <Button
            onClick={() => createUser(name, email, password, userClass)}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
