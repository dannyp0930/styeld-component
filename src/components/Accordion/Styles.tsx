import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid silver;
`;

export const Header = styled.div`
  diplay: flex;
  text-align: start;
  align-items: center;
  cursor: pointer;
  height: 2rem;
  margin: 0 2rem 0 1rem;
  font-size: 1.5rem;
`;

export const Button = styled.div`
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
  position: absolute;
`;

export const ContentsWrapper = styled.div`
  height: 0;
  width: 100$;
  padding: 0 0.5rem;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

export const Contents = styled.div`
  padding: 0.1rem;
`;