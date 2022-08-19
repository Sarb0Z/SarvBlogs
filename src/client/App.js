import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn";


function App() {
  const shouldRedirect = true;

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path=""
        element={
          shouldRedirect ? <Navigate replace to="/sign-in" /> : <SignIn />
        }
      />
    </Routes>
  );
}

export default App;
