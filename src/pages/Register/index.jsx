import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import IconUser from "../../img/perm_identity.svg";
import IconPassword from "../../img/lock_outline.svg";

export default function Register() {
  return (
    <S.SigninParent>
      <S.Title>
        <h1>SECRITIA</h1>
        <h2>REDE CORPORATIVA</h2>
      </S.Title>
      <S.FormCadastro>
        <form action="post">
          <h3>FAÇA SEU CADASTRO</h3>
          <div>
            <label>
              <img src={IconUser} alt="Icone de usuário" />
            </label>
            <input placeholder="Email Institucional" />
          </div>
          <div>
            <label>
              <img src={IconPassword} alt="Icone de senha" />
            </label>
            <input placeholder="Crie sua senha" type="password" />
          </div>
          <div>
            <label>
              <img src={IconPassword} alt="Icone de senha" />
            </label>
            <input placeholder="Repita sua senha" type="password" />
          </div>
          <button>Finalizar cadastro</button>
          <Link to={"/login"}>Voltar</Link>
        </form>
      </S.FormCadastro>
    </S.SigninParent>
  );
}
