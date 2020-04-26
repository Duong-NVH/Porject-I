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
import EditIcon from "@material-ui/icons/Edit";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(props.equipment.name);
  const [id, setID] = React.useState(props.equipment.id);
  const [condition, setCondition] = React.useState(props.equipment.condition);
  const [location, setLocation] = React.useState(props.equipment.location);
  const [maintenance, setMaintenance] = React.useState(
    props.equipment.maintenance
  );
  const [user, setUser] = React.useState(props.equipment.user);

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
  const editEquipment = (name, id, condition, location, maintenance, user) => {
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
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Equipment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Change the informations of the equipment #${id}`}
          </DialogContentText>
          <TextField
            autoFocus
            disabled
            label="ID"
            type="text"
            margin="normal"
            fullWidth
            onChange={handleChangeID}
            value={id}
          />
          <TextField
            autoFocus
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            onChange={handleChangeName}
            value={name}
          />

          <TextField
            autoFocus
            label="Location"
            margin="normal"
            type="text"
            fullWidth
            onChange={handleChangeLocation}
            value={location}
          />
          <TextField
            select
            autoFocus
            label="Condition"
            margin="normal"
            onChange={handleChangeCondition}
            value={condition}
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
            value={user}
          />
          <TextField
            label="Maintenance date "
            margin="normal"
            type="date"
            fullWidth
            onChange={handleChangeMaintenance}
            value={maintenance}
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
              editEquipment(name, id, condition, location, maintenance, user)
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
