import React from "react";
import Input from "../../components/Input/Input.jsx";

import "./SignUp.scss";

const SignUp = () => {
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
        <form className="form-input-container">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
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
