import { useState } from "react";
import Input from "../../components/Input/Input";
const SignIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(email + ' ' + fullname + ' ' + password);
        const userData = {
          email: email,
          password: password,
        };
    }
    
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
}

export default SignIn;