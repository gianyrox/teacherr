"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="style">
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}
