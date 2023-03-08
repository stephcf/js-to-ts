import React from "react";
import styled from 'styled-components';


const StyledButton = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`

const Button = ({ text, onClick }) => {
    return (
        <StyledButton onClick={() => onClick()}>
            {text}
        </StyledButton>);
}

export default Button;