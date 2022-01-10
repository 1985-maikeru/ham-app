import React from "react";
import "./App.css";
import Counter from "./Counter";

interface AppProps {
  //?をつける事で、オプショナルなプロパティにする必要がある
  message?: string;
}

//React.FunctionComponent　reactが用意している型
//↑を使う事で、defaultPropsに不正な物を設定した時や違う型の物を渡した時にエラーを出してくれる
//<>内に型引数を受け取る事ができる
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: "Hello, defaultProps!",
  //エラーが出る
  //description: "This is App component.",
};

export default App;
