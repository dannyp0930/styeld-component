import { Button, ExtendButton } from "./Styles";

export function Buttons() {
  return (
    <div>
      <Button>Normal Button</Button>
      <ExtendButton>Extend Button</ExtendButton>
      <br/>
      <Button as="a" href="#">Link with Normal Button</Button>
      <ExtendButton as="a" href="#">Link with Extend Button</ExtendButton>
    </div>
  )
};