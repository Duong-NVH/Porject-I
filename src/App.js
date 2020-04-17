import React from "react";
import "./App.css";
import SignInPage from "./components/SignInPage";
import fb from "./config/fb";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      dark: true,
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  SignIn = (email, password) => {
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert(error.message);
      });
  };
  handleDarkMode = () => {
    this.setState((old) => {
      return {
        dark: !old.dark,
      };
    });
  };
  render() {
    const theTheme = createMuiTheme({
      palette: {
        type: this.state.dark ? "dark" : "light",
      },
    });

    return (
      <ThemeProvider theme={theTheme}>
        {this.state.user ? (
          <Home
            user={this.state.user}
            dark={this.state.dark}
            handleDarkMode={this.handleDarkMode}
          />
        ) : (
          <SignInPage SignIn={this.SignIn} />
        )}
      </ThemeProvider>
    );
  }
}

export default App;
