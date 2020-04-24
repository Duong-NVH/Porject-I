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
    let ul = [];
    let el = [];
    let u = null;
    await db
      .collection("Users")
      .doc(this.props.user.uid)
      .get()
      .then((you) => {
        u = you.data();
        this.setState({
          you: u,
        });
      });
    await db.collection("Users").onSnapshot((querySnapshot) => {
      ul = [];
      querySnapshot.docs.map((doc) => {
        ul.push(doc.data());
        return doc.data;
      });
      this.setState({
        userList: ul,
      });
    });

    await db.collection("Equipment").onSnapshot((querySnapshot) => {
      el = [];
      querySnapshot.forEach((doc) => {
        el.push(doc.data());
      });
      this.setState({
        equipmentList: el,
      });
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
