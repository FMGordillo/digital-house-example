import { useMemo, useRef, useState } from "react";

function Counter() {
  const ref = useRef(0);

  return <p>I've just rendered {ref.current++} times</p>;
}

function App02() {
  const [input, setInput] = useState("");
  const [reRender, sendReRender] = useState(false);

  const CounterMemo = useMemo(() => Counter, [reRender]);

  return (
    <>
      <h1>
        Solution 02: Using <code>useMemo()</code>
      </h1>
      <CounterMemo />
      <button onClick={() => sendReRender(!reRender)}>Force re-render</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default App02;
