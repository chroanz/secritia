import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Header } from "./components";
import {
  ConfirmPassword,
  Dashboard,
  LoginForm,
  Register,
  ResetPassword,
} from "./pages";
import "./App.css";
import { Header } from "./components";

function App() {
  // function isAuthenticated() {
  //   // return localStorage.getItem("token") !== null;
  //   // return true;
  // }

  return (
    <>
      {/* {isAuthenticated && <Header />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <footer>©Secritia 2024 | Centro Universitário Paraíso</footer>
    </>
  );
}

export default App;
