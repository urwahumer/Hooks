import React, { useState } from "react";
import { Consumer } from "./contextApi";
import HOC from "./Hoc";

const Hooks = props => {
  const myinput = React.createRef();
  return (
    <div>
      <h1>Hallo to {props.name} </h1>
      <Consumer>{data => <h6>{data} from provider</h6>}</Consumer>
      <input type="text" ref={myinput}></input>
    </div>
  );
};

export default HOC(Hooks, "name");
