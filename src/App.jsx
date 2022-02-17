import { useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Hello World!</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
