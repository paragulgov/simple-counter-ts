import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const incCountHandler = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const resetCountHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <Scoreboard count={count} />
        <div className="Buttons">
          <Button text="inc" onClick={incCountHandler} disabled={count === 5} />
          <Button
            text="reset"
            onClick={resetCountHandler}
            disabled={count === 0}
          />
        </div>
      </div>
    </div>
  );
}
