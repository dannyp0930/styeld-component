import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${props => props.inputColor || "#6667AB"};
  background: ${props => props.backColor || "#AB9E67"};
  border: none;
  border-radius: 0.3rem;

  :focus {
    outline: 0.15rem solid #6667AB;
  };
`