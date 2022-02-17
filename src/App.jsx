import { useState } from "react";
import logo from "./logo.svg";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto">
        <header className="mx-auto">
          <h1 className="">Hello World!</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <NavLink
              className={
                ("text-decoration-none",
                ({ isActive }) =>
                  isActive ? "text-success font-weight-bold" : "text-primary")
              }
              to="/invoices"
            >
              Invoices{" "}
            </NavLink>
            |{" "}
            <NavLink
              className={
                ("text-decoration-none",
                ({ isActive }) =>
                  isActive ? "text-success font-weight-bold" : "text-primary")
              }
              to="/expenses"
            >
              Expenses
            </NavLink>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
}

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default App;
