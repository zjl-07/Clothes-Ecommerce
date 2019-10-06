import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "firebase/firebase.utils";
import currentUserContext from "context/current-user/current-user.context";
import HomePage from "pages/homepage";
import ShopPage from "pages/shop";
import Login from "pages/login";
import Register from "pages/register";
import Checkout from "pages/checkout";
import ContactUs from "pages/contact-us";
import Header from "components/header";
import "styles/main.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <currentUserContext.Provider value={currentUser}>
          <Header />
        </currentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact-us" component={ContactUs} />
          <Route
            exact
            path="/checkout"
            render={() => (currentUser ? <Checkout /> : <Login />)}
          />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
