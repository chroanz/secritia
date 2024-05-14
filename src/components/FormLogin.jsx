import IconUser from "../img/perm_identity.svg";
import IconPassword from "../img/lock_outline.svg";
import "../css/login.css";
import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <div className="LoginParent">
      <div className="Title">
        <h1>SECRITIA</h1>
        <h2>REDE CORPORATIVA</h2>
      </div>
      <div className="FormLogin">
        <form action="post">
          <h3>LOGIN</h3>
          <div>
            <label>
              <img src={IconUser} alt="Icone de usuário" />
            </label>
            <input placeholder="Email Institucional"></input>
          </div>
          <div>
            <label>
              <img src={IconPassword} alt="Icone de senha" />
            </label>
            <input placeholder="Senha" type="password"></input>
          </div>
          <p>Esqueceu a senha?</p>
          <button>Entrar</button>
          <Link to={"/cadastro"}>Clique aqui para fazer seu cadastro!</Link>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
