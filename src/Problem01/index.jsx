import { useRef, useState } from "react";

function Counter() {
  const ref = useRef(0);

  return <p>I've been re-rendered {ref.current++} times</p>;
}

function AppProblem() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Our problem</h1>
      <Counter />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default AppProblem;
