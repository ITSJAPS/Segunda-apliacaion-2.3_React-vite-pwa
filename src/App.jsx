import * as React from "react";
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>

      <a href="https://github.com/ITSJAPS/Segunda-apliacacion-2.3_React-vite-pwa" target="_blank">
          <img src="../images/f.jpg" className="logo" alt="Vite logo" />
        </a>
      <h1>TITULO PLACOSO JAPS </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}