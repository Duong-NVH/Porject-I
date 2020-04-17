import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import AddUserDialog from "../AddUserDialog";
import UserList from "../UserList";

const useStyles = makeStyles({
  root: {
    color: "white",
    textAlign: "start",
    backgroundColor: "tomato",
  },
  icon: {
    fontSize: 50,
    verticalAlign: "sub",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">
          <PersonIcon className={classes.icon} />
          {`Users: ${props.userList.length}`}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <UserList userList={props.userList} />
        <AddUserDialog />
      </CardActions>
    </Card>
  );
}
