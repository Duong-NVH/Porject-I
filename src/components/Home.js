import React from "react";
import Drawer from "./Drawer";
import fb from "../config/fb";
import Dashboard from "./Dashboard";
import Loading from "./Loading";

let db = fb.firestore();
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "dashboard",
      you: null,
      userList: null,
      equipmentList: null,
    };
  }
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const ul = [];
    const el = [];
    let u = null;
    await db
      .collection("Users")
      .doc(this.props.user.uid)
      .get()
      .then((you) => {
        u = you.data();
      });
    await db
      .collection("Users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ul.push(doc.data());
        });
      });

    await db
      .collection("Equipment")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          el.push(doc.data());
        });
      });

    await this.setState({
      you: u,
      userList: ul,
      equipmentList: el,
    });
  }

  render() {
    return this.state.userList ? (
      <div>
        <Drawer
          userList={this.state.userList}
          equipmentList={this.state.equipmentList}
          dark={this.props.dark}
          handleDarkMode={this.props.handleDarkMode}
        />
        <div className="content">
          <Dashboard
            you={this.state.you}
            userList={this.state.userList}
            equipmentList={this.state.equipmentList}
          />
        </div>
      </div>
    ) : (
      <div>
        <Loading />
      </div>
    );
  }
}
