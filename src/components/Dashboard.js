import React, { Component } from "react";
import UserCard from "./dashboard/UserCard";
import EquipmentCard from "./dashboard/EquipmentCard";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NotiCard from "./dashboard/NotiCard";
import ReportCard from "./dashboard/ReportCard";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      addingUser: false,
      addingEquipment: false,
    };
  }
  showAddUserDialog = () => {
    this.setState((old) => {
      return {
        addingUser: !old.addingUser,
      };
    });
  };
  showAddEquipmentDialog = () => {
    this.setState((old) => {
      return {
        addingEquipment: !old.addingEquipment,
      };
    });
  };
  addUser = () => {};
  addEquipment = () => {};
  render() {
    return (
      <div>
        <div className="uInfo">
          {this.props.you && (
            <div>
              <Typography variant="h6">{`Your Account: ${this.props.you.email} - ${this.props.you.class}`}</Typography>
              <Divider />
            </div>
          )}
        </div>
        <div className="db">
          <Typography variant="h4">Dashboard</Typography>
          <Divider />
          <div className="dbcontent">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <NotiCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <ReportCard reportList={this.props.reportList} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <UserCard userList={this.props.userList} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <EquipmentCard
                  equipmentList={this.props.equipmentList}
                  you={this.props.you}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
