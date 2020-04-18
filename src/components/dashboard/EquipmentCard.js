import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import Divider from "@material-ui/core/Divider";
import AddEquipmentDialog from "../AddEquipmentDialog";
import EquipmentList from "../EquipmentList";
const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "mediumaquamarine",
    textAlign: "center",
  },
  icon: {
    fontSize: 100,
    verticalAlign: "sub",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3">
          <ImportantDevicesIcon className={classes.icon} />
          {` Equipments: ${props.equipmentList.length}`}
        </Typography>
        <Typography variant="h6">In good condition: 90%</Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <EquipmentList equipmentList={props.equipmentList} />
        <AddEquipmentDialog />
      </CardActions>
    </Card>
  );
}
