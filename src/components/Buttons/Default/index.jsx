import * as S from "./styles";

function ButtonDefault({ onClick, label, ...props }) {
  function handleOnClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.ButtonContainer {...props} onClick={handleOnClick}>
      {label}
    </S.ButtonContainer>
  );
}

export default ButtonDefault;
