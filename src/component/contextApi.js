import react from "react";

const Mycontext = react.createContext("default value");

export const Provider = Mycontext.Provider;
export const Consumer = Mycontext.Consumer;
