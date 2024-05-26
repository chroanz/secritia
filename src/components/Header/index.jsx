import AvatarProfile from "../Avatar";
import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderContainer>
      <img
        src="https://e7.pngegg.com/pngimages/1017/208/png-clipart-usability-testing-user-experience-software-testing-logo-user-experience-company-text.png"
        alt="logo"
        width={100}
        height={50}
      />
      <AvatarProfile />
    </S.HeaderContainer>
  );
}
