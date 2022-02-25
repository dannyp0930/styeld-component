import React from 'react';
import { Button, ExtendButton } from "./Styles";

export function Buttons() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Change Button</Button>
      <ExtendButton>Extend Button</ExtendButton>
      <br/>
      <Button as="a" href="#">Link with Normal Button</Button>
      <ExtendButton as="a" href="#">Link with Extend Button</ExtendButton>
    </div>
  )
};