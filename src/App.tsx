import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [R_username, setr_username] = useState("");
  const [R_password, setr_password] = useState("");
  const [R_cpassword, setr_cpassword] = useState("");
  function login() {
    let x = document.getElementById("login")!;
    let y = document.getElementById("register")!;
    let z = document.getElementById("login-btn")!;
    if (x !== null && y !== null && z !== null) {
      ReactDOM.findDOMNode(x).style.left = "0px";
      ReactDOM.findDOMNode(y).style.left = "450px";
      ReactDOM.findDOMNode(z).style.left = "0px";
    }
  }
  function register() {
    let x = document.getElementById("login")!;
    let y = document.getElementById("register")!;
    let z = document.getElementById("login-btn")!;
    if (x !== null && y !== null && z !== null) {
      ReactDOM.findDOMNode(x).style.left = "-450px";
      ReactDOM.findDOMNode(y).style.left = "0px";
      ReactDOM.findDOMNode(z).style.left = "110px";
    }
  }
  return (
    <div className="login-background">
      <div className="login-background-block">
        <div className="login-background-block-btnbox">
          <div id="login-btn"></div>
          <button type="button" className="toggle-btn" onClick={login}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={register}>
            Register
          </button>
        </div>
        <form id="login" className="login-input-group">
          <input
            type="text"
            value={userName}
            className="login-input-field"
            onChange={(e) => setuserName(e.target.value)}
            placeholder="User name"
            required
          />
          <input
            type="password"
            value={password}
            className="login-input-field"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <button type="button" className="login-submit-btn">
            Login
          </button>
        </form>
        <form id="register" className="login-input-group">
          <input
            type="text"
            value={R_username}
            className="login-input-field"
            onChange={(e) => setr_username(e.target.value)}
            placeholder="User name"
            required
          />
          <input
            type="password"
            value={R_password}
            className="login-input-field"
            onChange={(e) => setr_password(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            value={R_cpassword}
            className="login-input-field"
            onChange={(e) => setr_cpassword(e.target.value)}
            placeholder="Re-Enter Password"
            required
          />
          <button type="button" className="login-submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
