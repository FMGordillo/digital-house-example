import { memo, useRef, useState } from "react";

function Counter({ updateComponent }) {
  const ref = useRef(0);

  return <p>I've just rendered {ref.current++} times</p>;
}

const CounterMemo = memo(Counter);

function App01() {
  const [input, setInput] = useState("");
  const [reRender, sendReRender] = useState(false);
  return (
    <>
      <h1>
        Solution 01: Using <code>React.memo</code>
      </h1>
      <CounterMemo updateComponent={reRender} />
      <button onClick={() => sendReRender(!reRender)}>Force re-render</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default App01;
