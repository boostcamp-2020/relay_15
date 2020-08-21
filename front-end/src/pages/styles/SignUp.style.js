import styled from 'styled-components';

export const SignUpStyle = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #5b97fe;
  font-family: 'MapoPeacefull';

  hr {
    background-color: #274475;
    height: 1px;
    border: 0;
    margin-bottom: 30px;
  }

  .sign-up {
    padding: 50px 40px 50px 40px;
    background-color: white;
    width: 500px;
    height: fit-content;
    margin-top: 100px;
    border-radius: 32px;
    box-shadow: 5px 5px 5px #345794;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  h1 {
    margin: 0 15px 0 0;
    color: #00173f;
    font-family: 'yg-jalnan';
  }
  .latte-header {
    display: flex;
    align-items: flex-end;
    font-size: 15px;
  }

  label {
    display: inline-block;
    width: 150px;
    font-size: 18px;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }

  .email-check {
    background: #5b97fe;
    border-radius: 15px;
    border: none;
    width: 100px;
    height: 30px;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in-out 0.8s;
  }

  .email-check:hover {
    opacity: 0.7;
  }

  input {
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
    margin-bottom: 15px;
    font-size: 15px;
    padding-left: 10px;
  }

  select {
    width: 100px;
    height: 35px;
    border-radius: 15px;
    border: 1px solid #c4c4c4;
  }

  .signup-button {
    font-family: 'S-CoreDream-2ExtraLight';
    width: 220px;
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
    margin: 50px 0px 20px 144px;
    font-family: 'yg-jalnan' !important;
  }

  .signup-button:hover {
    background-color: #5b97fe;
    box-shadow: 0px 15px 20px #345794;
    color: #fff;
    transform: translateY(-7px);
  }
`;
