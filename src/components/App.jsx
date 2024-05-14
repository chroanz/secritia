import FormLogin from "./FormLogin";
import FormCadastro from "./FormCadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/cadastro" element={<FormCadastro />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
