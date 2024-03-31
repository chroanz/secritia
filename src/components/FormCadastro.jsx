import IconUser from "../img/perm_identity.svg";
import IconPassword from "../img/lock_outline.svg";
import "../css/cadastro.css";
import { Link } from 'react-router-dom';


function FormCadastro() {
    return (
        <div className="SigninParent">
            <div className="Title">
                <h1>SECRITIA</h1>
                <h2>REDE CORPORATIVA</h2>
            </div>
            <div className="FormCadastro">
                <form action="post">
                    <h3>FAÇA SEU CADASTRO</h3>
                    <div>
                        <label><img src={IconUser} alt="Icone de usuário" /></label>
                        <input placeholder="Email Institucional"></input>
                    </div>
                    <div>
                        <label><img src={IconPassword} alt="Icone de senha" /></label>
                        <input placeholder="Crie sua senha" type="password"></input>
                    </div>
                    <div>
                        <label><img src={IconPassword} alt="Icone de senha" /></label>
                        <input placeholder="Repita sua senha" type="password"></input>
                    </div>
                    <button>Finalizar cadastro</button>
                    <Link to={"/login"}>Voltar</Link>
                </form>
            </div>
        </div>
    );
}

export default FormCadastro;
