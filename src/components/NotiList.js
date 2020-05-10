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

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [eList, setEList] = React.useState(
    props.equipmentList.filter(
      (e) =>
        e.condition.toLowerCase() === "bad" ||
        new Date(e.maintenance).getTime() < new Date().getTime()
    )
  );
  const clearAll = () => {
    setEList([]);
  };
  const removeTemp = (id) => {
    setEList(eList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Noti List</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Notifications</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="h5">Maintenance</Typography>
          <List>
            {props.equipmentList &&
              eList.map((e) => {
                return (
                  <ListItem key={e.id}>
                    <Button onClick={() => removeTemp(e.id)}>
                      <DeleteIcon />
                    </Button>
                    <div>
                      <Typography variant="h6">
                        {`Equipment #${e.id} needs maintenace:`}
                      </Typography>
                      <Typography variant="subtitle1">
                        {`Condition - ${e.condition} | Maintenance date - ${e.maintenance}`}
                      </Typography>
                      <Divider />
                    </div>
                  </ListItem>
                );
              })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearAll} color="secondary">
            Clear All
          </Button>
          <Button onClick={handleClose} color="default">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
