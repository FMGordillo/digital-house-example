// @ts-nocheck
import styled from "@emotion/styled";
import { Outlet, useLocation } from "react-router";
import { Link as BaseLink } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 24px auto;

  nav > ul {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0;
    list-style: none;
  }

  nav > ul > li:not(:last-child)::after {
    content: " |";
  }

  main {
    justify-self: center;
    align-self: center;
  }
`;

const Link = styled(BaseLink)`
  font-weight: ${(props) => (props["data-activelink"] ? "bold" : "normal")};
`;

function Layout() {
  const location = useLocation();

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  const createLink = (route, text) => (
    <Link data-activelink={isRouteActive(route)} to={route}>
      {text}
    </Link>
  );

  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>{createLink("/", "Selector")}</li>
            <li>{createLink("/problem-01", "Problem 01")}</li>
            <li>{createLink("/solution-01", "Solution 01")}</li>
            <li>{createLink("/problem-02", "Problem 02")}</li>
            <li>{createLink("/solution-02", "Solution 02")}</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

export default Layout;
