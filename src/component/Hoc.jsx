import React, { useState } from "react";

const HOC = (PassedComponent, username) => {
  const newComponent = props => {
    return (
      <div>
        <PassedComponent />
      </div>
    );
  };
  return newComponent;
};
export default HOC;
