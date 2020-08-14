import React from 'react';
import styled from 'styled-components';

const Button = ({ title, onClick = null, color = '#5b97fe' }) => {
  return (
    <ButtonWrapper onClick={onClick} color={color}>
      {title}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background-color: ${({ color }) => color};
  font-weight: bold;
  padding: 8px 16px;
  color: #fff;
  border-radius: 8px;
  border: none;
  transition: opacity 0.5s;
  font-family: 'yg-jalnan';
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
