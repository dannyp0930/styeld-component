import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 50%;
  height: 100vh;
  color: black;
  margin: 1rem auto;
  grid-template-columns: repeat(auto-fit, minmax(8.33%, auto));
  text-align: center;
`;

interface Iprops {
  col?: string;
  row?: string;
}

export const Item = styled.div<Iprops>`
  margin: 1px;
  display: flex;
  justify-content: center;
  border: solid;
  grid-column: auto / span ${props => props.col};
  grid-row: auto / span ${props => props.row};
`;