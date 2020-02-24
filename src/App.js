import React from "react";
import user from "./component/user";

import "./styles.scss/userStyle.scss";

function App() {
  return (
    <div>
      <div className="user-height">
        <h1>Hallo to Sass</h1>
        <user />
      </div>
      <div className="user-bottom-height">
        <p>Hallo to Sass</p>
        <p>Hallo to Sass</p>
        <p>Hallo to Sass</p>
        <user />
      </div>
    </div>
  );
}

export default App;
