import React, { useState } from "react";

//引数使わない場合、<{}>
//FC = FunctionComponent 省略できるンゴ！
const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  //useStateに渡す型引数で全てが決まる
  const [value, setValue] = useState<number>(initialValue);
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
