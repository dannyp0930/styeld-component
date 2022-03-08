import React from 'react'
import { Container, Item } from './Styels'

export function Grid() {
  return (
    <Container height='50rem'>
      <Item col='1'>1</Item>
      <Item col='2'>2</Item>
      <Item col='3'>3</Item>
      <Item col='4'>4</Item>
      <Item col='5'>5</Item>
      <Item col='6'>6</Item>
      <Item col='7'>7</Item>
      <Item col='8'>8</Item>
      <Item col='9'>9</Item>
    </Container>
  )
}
