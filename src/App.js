import React, { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
import { Provider } from "./component/contextApi";

import Hooks from "./component/Hooks";
import "./styles.scss/userStyle.scss";

const User = React.lazy(() => import("./component/User"));
function App() {
  const [value, setvalue] = useState(2);

  let handleclick = () => {
    setvalue(value + 1);
  };
  return (
    <div>
      <div className="user-height">
        <h1>Hallo to Sass{value}</h1>
      </div>
      <div className="user-bottom-height">
        <Suspense
          fallback={<div style={{ color: "yellow" }}>.... Loading</div>}
        >
          <lazy>
            <Provider value={value}>
              <Hooks />
              <User />
            </Provider>
          </lazy>
        </Suspense>

        <button onClick={handleclick}>Hit the button</button>
      </div>
    </div>
  );
}

export default App;
