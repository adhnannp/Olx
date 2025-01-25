import React, { useContext, useState, useEffect } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import olxLogo from "../../assets/olx-seeklogo.svg";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [signState, setSignState] = useState("Sign In");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();

    if (signState === "Sign Up") {
      if (!username.trim()) {
        toast.error("Name cannot be empty or contain only spaces");
        return;
      }
      if (username.trim().length < 4) {
        toast.error("Name must be at least 4 characters long");
        return;
      }
      if (!email.trim()) {
        toast.error("Email cannot be empty");
        return;
      }
      if (!password.trim()) {
        toast.error("Password cannot be empty or contain only spaces");
        return;
      }
      if (/\s/.test(password)) {
        toast.error("Password cannot contain spaces");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          login();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("An error occurred, please try again.");
      }
    } else {
      if (!email.trim()) {
        toast.error("Email cannot be empty");
        return;
      }
      if (!password.trim()) {
        toast.error("Password cannot be empty or contain only spaces");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          login();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("An error occurred, please try again.");
      }
    }
  };

  return (
    <div className="login">
      <img src={olxLogo} alt="OLX Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">{signState}</button>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to OLX?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
