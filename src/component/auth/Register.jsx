import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./../../apis/firebase";
// import firebaseApp from "../../apis/firebase/auth";
import Styles from "./auth.module.css";
import Auth_image from "./Auth_image.webp";
import { useNavigate } from "react-router-dom";

// built in firebase function for authentication
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    let navigate=useNavigate()
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    isLoading: false,
  });
  let { username, email, password, confirmpassword,isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit =async e => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        toast.error("Password is not matched");
      } else {
        setState({ isLoading: true });
        // console.log(state);
          await createUserWithEmailAndPassword(auth, email, password)
          navigate('/login')
          toast.success(`sucessfully ${username} created`)
      }
    } catch (error) {
      console.error(error);
    }
    // resetting the field
    setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLoading: false,
    });
  };
  return (
    <section id={Styles.authBlock}>
      <article>
        <div className={Styles.authLeft}>
          <h1>Register</h1>
          <figure>
            <img src={Auth_image} alt="Auth_image" />
          </figure>
        </div>
        <div className={Styles.authRight}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm-Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="confirm password"
                value={confirmpassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
                          <button>{isLoading === true ? "Loading..." : "Register"}</button>
                          
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
