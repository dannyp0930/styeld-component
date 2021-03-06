import styled from "styled-components";

// Adapting based on props

interface Iprops {
  primary?: boolean;
}

export const Button = styled.button<Iprops>`
  background: ${props => props.primary ? "#6667AB" : "white"};
  color: ${props => props.primary ? "white" : "#6667AB"};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 0.15rem solid #6667AB;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? "white" : "#6667AB"};
    color: ${props => props.primary ? "#6667AB" : "white"};
  };

  &:active {
    font-weight: bold;
  };
`;

// Extending Styles

export const ExtendButton = styled(Button)`
  color: #AB9E67;
  border-color: #AB9E67;

  &:hover {
    background-color: #AB9E67;
    color: white;
  }
`;