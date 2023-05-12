import styled from "styled-components"

const ButtonStyled = styled.button`
  background-color: #09715D;
  color: white;
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 6px;
  margin-top: 42px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const Button = ({ children }) => (
    <ButtonStyled>
      {children}
    </ButtonStyled>
);