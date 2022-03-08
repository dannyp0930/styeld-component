import React from 'react'
import { Button, Container, Contents, ContentsWrapper, Header } from './Styles'

const contents = (
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
    reiciendis excepturi deserunt dolores, at quae? Odit veniam libero, incidunt
    in illo eius praesentium quia rerum eaque illum perspiciatis sint.
  </p>
);

export function Accordion() {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const [isClolapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    event => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "#D6ECFF";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
      }
      setIsCollapse(!isClolapse);
    },
    [isClolapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        Accordion
        <Button>{buttonText}</Button>
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{contents}</Contents>
      </ContentsWrapper>
    </Container>
  )
}
