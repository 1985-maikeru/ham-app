import React from "react";
import "./App.css";

interface AppProps {
  message?: string;
}

const App = ({ message }: AppProps) => {
  return <p>{message}</p>;
};

export default App;
