import styled from "styled-components";

interface IProps {
  inputColor?: string;
  backColor?: string;
}

export const Input = styled.input<IProps>`
  padding: 0.5rem;
  margin: 0.5rem;
  font-family: Nanum Gothic;
  font-size: 1rem;
  background: ${props => props.backColor || "#AB9E67"};
  color: ${props => props.inputColor || "#6667AB"};
  border: none;
  border-radius: 0.3rem;

  :focus {
    outline: 0.15rem solid #6667AB;
  };
`;