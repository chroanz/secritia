import styled from "styled-components";

export const LoginParent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../img/background-desktop.png");
  background-size: contain;
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: #41296b;
  letter-spacing: 0.5rem;
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const FormLogin = styled.div`
  width: 400px;
  height: 470px;
  text-align: center;

  form {
    border-radius: 4px;
    background-color: #6e49cf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1rem;

    button,
    input {
      width: 246px;
      border-radius: 4px;
      border: none;
      height: 40px;
    }

    button {
      background-color: #7cac3c;
      color: white;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        font-weight: 700;
      }
    }

    input {
      padding-left: 1rem;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10%;

      img {
        width: 24px;
        height: 24px;
        justify-self: center;
        position: relative;
        right: 1rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      color: white;
    }

    p,
    a {
      font-size: 12px;
      color: white;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        font-weight: 700;
      }
    }
  }
`;
