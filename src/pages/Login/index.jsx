import React from "react";
import { Link } from "react-router-dom";
import IconUser from "../../img/perm_identity.svg";
import IconPassword from "../../img/lock_outline.svg";
import * as S from "./styles";
import { ButtonDefault, InputDefault } from "../../components";

export default function LoginForm() {
  return (
    <S.LoginParent>
      <S.Title>
        <h1>SECRITIA</h1>
        <h2>REDE CORPORATIVA</h2>
      </S.Title>
      <S.FormLogin>
        <form action="post">
          <h3>LOGIN</h3>
          <div>
            <label>
              <img src={IconUser} alt="Icone de usuário" />
            </label>
            <InputDefault placeholder={"E-mail institucional"} type={"email"} />
          </div>
          <div>
            <label>
              <img src={IconPassword} alt="Icone de senha" />
            </label>
            <InputDefault placeholder={"Senha"} type={"password"} />
          </div>
          <p>
            <a href="/reset-password">Esqueceu a senha?</a>
          </p>
          <ButtonDefault label={"Entrar"} />
          <Link to={"/cadastro"}>Clique aqui para fazer seu cadastro!</Link>
        </form>
      </S.FormLogin>
    </S.LoginParent>
  );
}
