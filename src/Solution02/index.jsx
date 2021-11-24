import { useMemo, useState } from "react";

function Solution02() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const reverseText = (/** @type {string} */ text) => {
    let i = 0;
    while (i < 1000000000) i++;
    return text.split("").reverse().join("");
  };

  const reversedText = useMemo(() => reverseText(text), [text]);

  return (
    <>
      <h1>
        Solution 02: Using <code>useMemo()</code>
      </h1>
      <blockquote>
        Play around with the counter and the input. Note that they render
        differently than the Problem 02.
        <br />
        Please, be patient. Just one click at a time.
      </blockquote>
      <div>
        <button onClick={() => increment()}>+</button>
        <span> {count} </span>
        <button onClick={() => decrement()}>-</button>
      </div>
      <p>
        {text} is {reversedText} backwards
      </p>
      <input
        type="text"
        name="password"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
export default Solution02;
