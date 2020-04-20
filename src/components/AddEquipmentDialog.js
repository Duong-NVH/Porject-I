import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            autoFocus
            label="ID"
            type="text"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            autoFocus
            label="Location"
            type="text"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            select
            autoFocus
            label="Condition"
            value={1}
            InputLabelProps={{
              shrink: true,
            }}
          >
            <MenuItem value={1}>Good</MenuItem>
            <MenuItem value={0}>Bad</MenuItem>
          </TextField>
          <TextField
            autoFocus
            label="Current user"
            type="text"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Maintainace date "
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
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
