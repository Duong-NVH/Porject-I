import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import NotiList from ".././NotiList";

const useStyles = makeStyles({
  root: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#FFD700",
  },
  icon: {
    fontSize: 100,
    verticalAlign: "sub",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const countNoti = (el) => {
    let now = new Date();
    let ans = el.filter(
      (e) =>
        e.condition.toLowerCase() === "bad" ||
        new Date(e.maintenance).getTime() < now.getTime()
    );
    console.log(ans);
    return ans.length;
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3">
          <NotificationsIcon className={classes.icon} />
          <Badge
            badgeContent={countNoti(props.equipmentList)}
            color="secondary"
          >
            {` Notifications`}
          </Badge>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <NotiList equipmentList={props.equipmentList} />
      </CardActions>
    </Card>
  );
}
