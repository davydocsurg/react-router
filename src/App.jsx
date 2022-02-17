import { useState } from "react";
import logo from "./logo.svg";
import { Outlet, Link } from "react-router-dom";

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
            <Link
              className={
                ("text-decoration-none",
                ({ isActive }) =>
                  isActive ? "text-success font-weight-bold" : "text-primary")
              }
              to="/invoices"
            >
              Invoices{" "}
            </Link>
            |{" "}
            <Link
              className={
                ("text-decoration-none",
                ({ isActive }) =>
                  isActive ? "text-success font-weight-bold" : "text-primary")
              }
              to="/expenses"
            >
              Expenses
            </Link>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
}

export default App;
