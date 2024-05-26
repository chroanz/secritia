import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 90px;
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;
