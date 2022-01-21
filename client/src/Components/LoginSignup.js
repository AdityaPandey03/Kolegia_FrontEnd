import React, { useState } from "react";
import "./Loginsignup.css";

function LoginSignup() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const hanldeLogin = (e) => {
    e.preventDefault();
  };

  const hanldeSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginSignupContainer">
      <img
        className="loginSignupImage"
        src="/images/kolegia.jpg"
        alt="kuch bhi"
        style={{
          left: "0",
          webkitTransform: "ScaleX(-1)",
          transform: "ScaleX(-1)",
        }}
      />
      <img
        className="loginSignupImage"
        src="/images/kolegia.jpg"
        alt="kuch bhi"
        style={{
          right: "0",
        }}
      />
      <div
        style={{
          height: "100%",
        }}
      >
        <div
          className="signupFormContainer"
          style={{
            visibility: showSignUp === true ? "visible" : "hidden",
          }}
        >
          <form className="signupForm" onSubmit={hanldeSignUp}>
            <div className="formItem" style={{ marginTop: "5%" }}>
              <i className="fa fa-user icons "></i>
              <input
                className="input-field"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="formItem">
              <i className="fa fa-lock icons"></i>
              <input
                className="input-field"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="formItem">
              <i className="fa fa-key icons"></i>
              <input
                className="input-field"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <button className="submit-btn submit-signup btn" type="submit">
              Sign-up
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: "white",
              }}
            >
              <p>Already have an account?</p>
              <button
                style={{
                  background: "transparent",
                  fontWeight: "bold",
                  color: "white",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
                type="button"
                onClick={(e) => {
                  setShowSignUp(!showSignUp);
                  setShowLogin(!showLogin);
                }}
              >
                LOGIN HERE
              </button>
            </div>
          </form>
        </div>
        <div
          className="loginFormContainer"
          style={{
            visibility: showLogin === true ? "visible" : "hidden",
          }}
        >
          <form className="loginForm" onSubmit={hanldeLogin}>
            <div className="formItem">
              <i className="fa fa-user icons"></i>
              <input
                className="input-field"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="formItem">
              <i className="fa fa-lock icons"></i>
              <input
                className="input-field"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="submit-btn btn" type="submit">
              Login
            </button>
            <div className="signupLink">
              <p>Forgot Password?</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                <p>Don't have an account?</p>
                <button
                  type="button"
                  onClick={(e) => {
                    setShowSignUp(!showSignUp);
                    setShowLogin(!showLogin);
                  }}
                  style={{
                    background: "transparent",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  SIGN-UP HERE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
