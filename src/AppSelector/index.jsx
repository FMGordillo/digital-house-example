import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const List = styled.ul`
  line-height: 2rem;
`;

function AppSelector() {
  return (
    <main>
      <h1>Select the example</h1>
      <List>
        <li>
          <Link to="problem-01">
            Problem 01: Re-rending Child when it's not needed
          </Link>
        </li>
        <li>
          <Link to="solution-01">
            Solution 01: Using <code>React.memo</code>
          </Link>
        </li>
        <li>
          <Link to="problem-02">
            Problem 02: Re-executing (in consequence, re-rendering) a value
          </Link>
        </li>
        <li>
          <Link to="solution-02">
            Solution 02: Using <code>useMemo()</code>
          </Link>
        </li>
      </List>
    </main>
  );
}

export default AppSelector;
