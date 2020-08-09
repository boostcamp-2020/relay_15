import styled from 'styled-components';

export const MyPageStyle = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: 'MapoPeacefull';

  input {
    width: 200px;
    height: 30px;
    border-radius: 35px;
    border: 1px solid #c4c4c4;
    margin-bottom: 15px;
    font-size: 15px;
    padding: 10px 0px 10px 15px;
    font-family: 'MapoPeacefull';
  }

  .mypage-btn {
    background: #5b97fe;
    border: none;
    border-radius: 15px;
    color: #ffffff;
    width: 150px;
    height: 40px;
    transition: ease-in-out 0.8s;
    cursor: pointer;
  }

  .mypage-btn:hover {
    opacity: 0.7;
  }

  section {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mypage-form {
    display: flex;
    flex-direction: column;
  }

  .mypage-form input {
    width: 300px;
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
  }

  .signup-button:hover {
    background-color: #5b97fe;
    box-shadow: 0px 15px 20px #345794;
    color: #fff;
    transform: translateY(-7px);
  }

  .info-button:hover {
    background-color: #5b97fe;
    box-shadow: 0px 15px 20px #345794;
  }

  .update-button {
    background-color: #345794;
  }

  .delete-button {
    background-color: rgb(97, 97, 97);
  }

  .delete-button:hover {
    background-color: rgb(190, 0, 0);
    box-shadow: 0px 15px 20px rgb(134, 0, 0);
  }

  .update-button {
    font-family: 'yg-jalnan' !important;
    width: 320px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-top: 30px;
  }

  .update-button:hover {
    color: #fff;
    transform: translateY(-7px);
  }
`;
