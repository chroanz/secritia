import * as S from "./styles";

function ButtonDefault({ onClick, label, type }) {
  function handleOnClick() {
    if (onClick) {
      onClick();
    }
  }

  return <S.ButtonContainer onClick={handleOnClick}>{label}</S.ButtonContainer>;
}

export default ButtonDefault;
