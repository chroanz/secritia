import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(.../img/Group\ 55.png);
  background-repeat: no-repeat;
  background-size: 20%;
  background-position-y: bottom;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  color: white;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 320px;
  text-align: center;
  border-radius: 4px;
  background-color: #6e49cf;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Back = styled.a`
  cursor: pointer;
  a {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-decoration: underline;
  }
`;
