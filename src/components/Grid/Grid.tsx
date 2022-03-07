import React from 'react'
import { Container, Item } from './Styels'

export function Grid() {
  return (
    <Container>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item col='12'>4</Item>
    </Container>
  )
}
