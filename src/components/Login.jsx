import React from "react";
import { connect } from "react-redux";
import { login, logout } from "./Action";

const Login = ({ isAuthenticated, login, logout }) => {
  return (
    <div>
      <h2>Authentication: {isAuthenticated ? "Logged In" : "Logged Out"}</h2>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);