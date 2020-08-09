import styled from 'styled-components';

export const Header = styled.header`
  background: #5b97fe;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    padding: 20px 0px 20px 40px;
    font-family: 'yg-jalnan';
    color: #ffffff;
  }

  .page-nav button {
    background: #5b97fe;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    transition: ease-in-out 0.7s;
  }

  .menu-button {
    font-family: 'yg-jalnan' !important;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 0px;
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
    width: 140px !important;
  }

  .menu-button:hover {
    color: rgb(0, 5, 80);
  }
`;
