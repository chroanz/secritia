import { Button } from "antd";
import styled from "styled-components";

export const ButtonContainer = styled(Button)`
  width: 360px;
  height: 50px;
  background-color: #7cac3c;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
