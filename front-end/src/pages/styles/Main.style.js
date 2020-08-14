import styled from 'styled-components';

export const MainStyle = styled.div`
  background-color: #eeeeee;
  font-family: 'MapoPeacefull';
  width: 100%;
  height: 100vh;

  .main-content {
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
  }

  .profile {
    display: flex;
    border: 1px solid black;
    width: 80%;
    min-width: 520px;
    height: 60vh;
    border-radius: 10px;
    justify-content: space-between;
  }

  .profile-content {
    padding-top: 20px;
    width: 60%;
  }

  .profile-intro {
    height: 100%;
    font-size: 20px;
  }
  .profile-buttons {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
  }

  .profile-buttons button {
    color: #ffffff;
    background: teal;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 30px;
    min-width: 60px;
    cursor: pointer;
    transition: ease-in-out 0.7s;
  }

  .profile-buttons button:hover {
    opacity: 0.8;
  }

  h2 {
    font-size: 15px;
  }

  .friends-list {
    list-style: none;
    margin: 0;
    padding: 10px;
  }

  .home-title {
    padding: 0px;
    font-size: 24px;
  }
  .guest-book {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .guest-book-textarea {
    font-family: 'MapoPeacefull' !important;
    /* min-width: 420px;
    max-width: 480px; */
    width: 100%;
    height: 80px;
    border-radius: 8px;
  }

  .guest-book-button {
    height: 88px;
    width: 44px;
    background-color: #585858;
    color: white;
    border: 0px;
    border-radius: 8px;
    cursor: pointer;
  }

  & aside {
    width: 15%;
    min-width: 100px;
    overflow-x: hidden;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    a {
      color: black;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }
`;
