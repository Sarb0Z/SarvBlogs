import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  const token = localStorage.getItem("auth-token");
  var shouldRedirect = true;

  if (token) {
    shouldRedirect = false;
  }

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/blogs" element={<Blogs />} />

      <Route
        path=""
        element={
          shouldRedirect ? <Navigate replace to="/sign-in" /> : <Blogs />
        }
      />
    </Routes>
  );
}

export default App;
