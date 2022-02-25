import styled from "styled-components";

// Adapting based on props
export const Button = styled.button`

  background-color: #6667AB;
  color: white;
  font-family: Nanum Gothic;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 0.15rem solid #6667AB;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #6667AB;
  };

  &:active {
    font-weight: bold;
  };
`;

// Extending Styles

export const ExtendButton = styled(Button)`
  background-color: #AB9E67;
  border-color: #AB9E67;

  &:hover {
    background-color: white;
    color: #AB9E67;
  }
`;