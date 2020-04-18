import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#9852f9",
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
          <DescriptionIcon className={classes.icon} />
          <Badge badgeContent={99} color="secondary">
            {` Reports`}
          </Badge>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button>Show</Button>
      </CardActions>
    </Card>
  );
}
