import React, { useState } from "react";
import Input from "../../components/Input/Input.jsx";
import addUser from "../../api/addUser.js";

import "./SignUp.scss";

const SignUp = () => {
  // const [form, setForm] = React.useState({
  //   fullname: '',
  //   email: '',
  //   password: '',
  //   password_re: ''
  // });
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.id]: e.value,
  //   });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setForm({
  //     fullname: '',
  //     email: '',
  //     password: '',
  //     password_re: ''
  //   });

  //   alert(form.email + ' ' + form.fullname + ' ' + form.password);
  // };
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [password_re, setPassword_re] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(email + ' ' + fullname + ' ' + password);
    const userData = {
      fullname: fullname,
      email: email,
      password: password,
    };

    addUser(userData);
    setEmail("");
    setFullname("");
    setPassword("");
    setPassword_re("");
  };

  return (
    <div className="sign-up-page-container">
      <div
        className="image-container"
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/side-background.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Sign Up</h1>
      </div>
      <div className="form-container">
        <h1>Welcome</h1>
        <p className="form-subheading">Let's sign you up quickly</p>
        <form className="form-input-container" onSubmit={handleSubmit}>
          <Input
            id="fullname"
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="password_re"
            type="password"
            placeholder="Confirm Password"
            value={password_re}
            onChange={(e) => setPassword_re(e.target.value)}
          />
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        <p className="login-page-link-text">
          Already have an account? <a href="/login">Log-in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
