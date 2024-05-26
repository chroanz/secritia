import { Input } from "antd";
import styled from "styled-components";

export const InputContainer = styled(Input)`
  width: 360px;
  height: 50px;
  border-radius: 4px;
  color: gray;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
