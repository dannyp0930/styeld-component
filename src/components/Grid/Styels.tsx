import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  color: black;
  margin: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px 50px;
  text-align: center;
  grid-gap: 0.25rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
`