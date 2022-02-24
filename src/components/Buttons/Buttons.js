import { Button, ExtendButton } from "./Styels";

export function Buttons() {
  return (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <ExtendButton>Tomato Button</ExtendButton>
      <br/>
      <Button as="a" href="#">Link with Normal Button</Button>
      <ExtendButton as="a" href="#">Link with Tomato Button</ExtendButton>
    </div>
  )
};