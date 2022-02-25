import React from "react";
import { Input } from "./Styles";

export function Inputs() {
  return (
    <div>
      <Input defaultValue="@default" type="text"/>
      <Input defaultValue="@backcolorskyblue" type="text" backColor="skyblue"/>
      <Input defaultValue="@colorred" type="text" inputColor="red"/>
    </div>
  )
}
