import { ButtonDefault, InputDefault } from "../../components";
import * as S from "./styles";

export default function ConfirmPassword() {
  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>MUDAR A SENHA</S.Title>
        <S.Subtitle>Insira sua nova senha</S.Subtitle>
        <InputDefault
          type={"password"}
          placeholder={"Nova senha"}
          isRequired={true}
        />
        <InputDefault
          type={"password"}
          placeholder={"Confirmar senha"}
          isRequired={true}
        />
        <ButtonDefault label={"Confirmar"} />
        <S.Back>
          <a href="/reset-password">Voltar</a>
        </S.Back>
      </S.FormContainer>
    </S.Container>
  );
}
