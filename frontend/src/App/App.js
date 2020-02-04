import React from "react";
import { Switch, Route } from "react-router-dom";

import { graphql, QueryRenderer } from "react-relay";
import MainPage from "./containers/MainPage";
import API from "../lib/API";
import TokenStore from "../lib/TokenStore";
import AuthContext from "../contexts/AuthContext";
import Navbar from "./containers/Navbar/navbar";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Secret from "./containers/Secret/Secret";
import NotFound from "./containers/NotFound/NotFound";

import environment from "../environment";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({
        auth: { ...prevState.auth, user, authToken }
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined }
      }));
    };

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    };
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user =>
        this.setState(prevState => ({ auth: { ...prevState.auth, user } }))
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className="App">
          <Navbar />
          <QueryRenderer
            environment={environment}
            query={graphql`
              query AppQuery {
                jurors {
                  _id
                  name
                  rating
                  political
                  education
                  employment
                }
              }
            `}
            variables={{}}
            render={({ error, props }) => {
              if (error) {
                return <div>Error!</div>;
              }
              if (!props) {
                return <div>Loading...</div>;
              }
              // return <MainPage {...props} />;
            }}
          />
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/secret" component={Secret} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}
