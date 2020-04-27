import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import fb from "../config/fb";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const convertTime = (unixTimeStamp) => {
    return new Date(unixTimeStamp.seconds * 1000);
  };
  const removeReport = (time) => {
    fb.firestore()
      .collection("Report")
      .where("time", "==", time)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          fb.firestore()
            .collection("Report")
            .doc(doc.id)
            .delete()
            .catch((error) => {
              alert("ERROR: ", error);
            });
        });
      });
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Show</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Reports</DialogTitle>
        <DialogContent>
          <List>
            {props.reportList &&
              props.reportList.map((report) => {
                return (
                  <ListItem key={report.time}>
                    <div>
                      <Typography variant="h6" gutterBottom>
                        {`Report about #${report.equipmentID}:`}
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        <em>{`${convertTime(report.time)}`}</em>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {`${report.text}`}
                      </Typography>

                      <Divider />
                    </div>
                    <Button onClick={() => removeReport(report.time)}>
                      <DeleteIcon />
                    </Button>
                  </ListItem>
                );
              })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
