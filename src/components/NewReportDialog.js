import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import fb from ".././config/fb";
import ReportIcon from "@material-ui/icons/Report";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const addNewReport = (text, equipmentID, user) => {
    const now = new Date();
    fb.firestore()
      .collection("Report")
      .add({
        text,
        time: now,
        equipmentID,
        user: user.email,
      })
      .then(() => handleClose())
      .catch((error) => alert("Error: ", error));
  };

  return (
    <div>
      {/* <Button color="default" onClick={handleClickOpen}>
        
      </Button> */}
      <ReportIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Report about this equipment
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{`Write new report for ${props.equipmentID}`}</DialogContentText>
          <TextField
            autoFocus
            label="Report"
            type="text"
            margin="normal"
            fullWidth
            onChange={handleChangeText}
            multiline
            size="medium"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel [x]
          </Button>
          <Button
            onClick={() => addNewReport(text, props.equipmentID, props.you)}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
