import { ButtonDefault, InputDefault } from "../../components";
import * as S from "./styles";

export default function ResetPassword() {
  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>MUDAR A SENHA</S.Title>
        <S.Subtitle>
          Insira seu e-mail institucional para receber um código de recuperação
          de senha
        </S.Subtitle>
        <InputDefault
          text={"teste"}
          type={"email"}
          placeholder={"E-mail institucional"}
          isRequired={true}
        />
        <ButtonDefault label={"Enviar código de recuperação"} />
        <S.Back>
          <a href="/login">Voltar</a>
        </S.Back>
      </S.FormContainer>
    </S.Container>
  );
}
