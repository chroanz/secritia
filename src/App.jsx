import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm, Register, ResetPassword } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <footer>©Secritia 2024 | Centro Universitário Paraíso</footer>
    </>
  );
}

export default App;
