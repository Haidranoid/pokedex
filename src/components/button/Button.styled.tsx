import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px;
  min-width: 400px;
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.46);

  &:hover {
    background-color: #fbeca3;
  }
`
