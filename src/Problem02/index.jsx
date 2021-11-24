import { useState } from "react";

function Problem02() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const reverseText = (/** @type {string} */ text) => {
    let i = 0;
    while (i < 1000000000) i++;
    return text.split("").reverse().join("");
  };

  const reversedText = reverseText(text);

  return (
    <>
      <h1>Problem 02: Expensive function blocks render</h1>
      <blockquote>
        Play around with the counter and the input. Note that both are delayed.
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
export default Problem02;
