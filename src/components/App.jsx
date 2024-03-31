import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<FormLogin />} />
        <Route path='/cadastro' element={<FormCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
