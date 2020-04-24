import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import fb from ".././config/fb";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [id, setID] = React.useState("");
  const [condition, setCondition] = React.useState("Good");
  const [location, setLocation] = React.useState("");
  const [maintenance, setMaintenance] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeID = (e) => {
    setID(e.target.value);
  };
  const handleChangeCondition = (e) => {
    setCondition(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeMaintenance = (e) => {
    setMaintenance(e.target.value);
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const addNewEquipment = (
    name,
    id,
    condition,
    location,
    maintenance,
    user
  ) => {
    fb.firestore()
      .collection("Equipment")
      .doc(id)
      .set({
        name,
        id,
        condition,
        location,
        maintenance,
        user,
      })
      .then(() => handleClose())
      .catch((error) => alert("Error: ", error));
  };

  return (
    <div>
      <Button color="default" onClick={handleClickOpen}>
        Add Equipment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Equipment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the informations of the new equipment.
          </DialogContentText>
          <TextField
            autoFocus
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            onChange={handleChangeName}
          />
          <TextField
            autoFocus
            label="ID"
            type="text"
            margin="normal"
            fullWidth
            onChange={handleChangeID}
          />
          <TextField
            autoFocus
            label="Location"
            margin="normal"
            type="text"
            fullWidth
            onChange={handleChangeLocation}
          />
          <TextField
            select
            autoFocus
            label="Condition"
            margin="normal"
            value={"Good"}
            onChange={handleChangeCondition}
          >
            <MenuItem value={"Good"}>Good</MenuItem>
            <MenuItem value={"Bad"}>Bad</MenuItem>
          </TextField>
          <TextField
            autoFocus
            label="Current user"
            margin="normal"
            type="text"
            fullWidth
            onChange={handleChangeUser}
          />
          <TextField
            label="Maintenance date "
            margin="normal"
            type="date"
            fullWidth
            onChange={handleChangeMaintenance}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel [x]
          </Button>
          <Button
            onClick={() =>
              addNewEquipment(name, id, condition, location, maintenance, user)
            }
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
