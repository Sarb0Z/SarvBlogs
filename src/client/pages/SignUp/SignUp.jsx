import React from "react";
import Input from "../../components/Input/Input.jsx";

import "./SignUp.scss";

const SignUp = () => {
  // eslint-disable-next-line no-undef
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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
            type="text"
            placeholder="Full Name"
            value={inputs.fullname || ""}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={inputs.re_password || ""}
            onChange={handleChange}
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
