import React, { useState, useEffect } from "react";
import Hooks from "./Hooks";
import axios from "axios";

function User(props) {
  const [counter, setcounter] = useState([]);

  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  let name = username;
  let pswd = password;

  let Data = {
    name,
    pswd
  };

  let handleusername = e => {
    setusername(e.target.value);
  };
  let handlepassword = e => {
    setpassword(e.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3333/todos")
      .then(result => setcounter(result.data));
  }, []);

  let handleForm = e => {
    e.preventDefault();
  };
  useEffect(() => {
    axios
      .post("http://localhost:3333/todos", Data)
      .then(response => console.log(response));
  }, []);
  let submit = () => {};
  return (
    <form onSubmit={handleForm}>
      <div>
        <div>
          <span for="examplePassword">username</span>
          <input
            type="username"
            name="username"
            value={username}
            onChange={handleusername}
            placeholder="username"
          />
        </div>
        <div>
          <span for="examplePassword">Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlepassword}
            placeholder="Password"
          />
        </div>

        <button onClick={submit}>Click Me</button>
      </div>

      <Hooks />
    </form>
  );
}

export default User;
