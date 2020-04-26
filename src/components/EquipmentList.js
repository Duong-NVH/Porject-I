import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import fb from "../config/fb";
import AddEquipmentDialog from "./AddEquipmentDialog";
import EditEquipmentDialog from "./EditEquipmentDialog";
import NewReportDialog from "./NewReportDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const changeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const deleteEquipment = (id) => {
    fb.firestore()
      .collection("Equipment")
      .doc(id)
      .delete()
      .then(() => alert(`Deleted Equipment #${id}`))
      .catch((error) => {
        alert("ERROR: ", error);
      });
  };
  return (
    <div>
      <Button color="default" onClick={handleClickOpen}>
        Equipment list
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Equipment list
            </Typography>
            <AddEquipmentDialog />
            <TextField
              value={searchInput}
              onChange={changeSearchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>User(ID)</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Maintenance</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.equipmentList &&
                props.equipmentList
                  .filter(
                    (equipment) =>
                      equipment.id.includes(searchInput.toLowerCase()) ||
                      equipment.name.includes(searchInput.toLowerCase()) ||
                      equipment.location.includes(searchInput.toLowerCase()) ||
                      equipment.user.includes(searchInput.toLowerCase())
                  )
                  .map((equipment) => {
                    return (
                      <TableRow key={equipment.id}>
                        <TableCell>{equipment.name}</TableCell>
                        <TableCell>{equipment.id}</TableCell>
                        <TableCell>{equipment.user}</TableCell>
                        <TableCell>{equipment.location}</TableCell>
                        <TableCell>{equipment.condition}</TableCell>
                        <TableCell>{equipment.maintenance}</TableCell>
                        <TableCell>
                          <Button>
                            <EditEquipmentDialog equipment={equipment} />
                          </Button>
                          <Button onClick={() => deleteEquipment(equipment.id)}>
                            <DeleteIcon />
                          </Button>
                          <Button>
                            <NewReportDialog equipmentID={equipment.id} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </div>
  );
}
