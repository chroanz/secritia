import * as S from "./styles";

export default function InputDefault({
  title,
  type,
  maxLength,
  placeholder,
  isRequired,
}) {
  return (
    <S.InputContainer
      title={title || "Label"}
      required={isRequired || false}
      type={type || "text"}
      placeholder={placeholder || "Digite aqui..."}
      maxLength={maxLength || 255}
    />
  );
}
