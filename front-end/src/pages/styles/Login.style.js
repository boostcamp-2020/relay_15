import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5b97fe;
  font-family: 'yg-jalnan';

  & h1 {
    padding-top: 60px;
    font-size: 32px;
    color: #00173f;
  }

  & .login-box {
    background-color: white;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
    font-size: 12px;
    vertical-align: middle;
    box-shadow: 5px 5px 5px #345794;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  & input {
    width: 220px;
    height: 40px;
    border-radius: 45px;
    border: 1px solid rgb(194, 194, 194);
    padding-left: 10px;
    margin-top: 10px;
    font-family: 'S-CoreDream-2ExtraLight';
  }

  & .login-button {
    font-family: 'S-CoreDream-2ExtraLight';
    width: 240px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    background-color: #345794;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 20px 0px 20px 0px;
    font-family: 'yg-jalnan' !important;
  }

  & .login-button:hover {
    background-color: #5b97fe;
    box-shadow: 0px 15px 20px #345794;
    color: #fff;
    transform: translateY(-7px);
  }

  & .signup {
    margin-top: 40px;
    color: #5b97fe;
  }
`;
