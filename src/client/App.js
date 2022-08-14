import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp.jsx";

function App() {
  const shouldRedirect = true;

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path=""
        element={
          shouldRedirect ? <Navigate replace to="/sign-up" /> : <SignUp />
        }
      />
    </Routes>
  );
}

export default App;
