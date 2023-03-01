import { Link } from "gatsby";
import React from "react";

export default function Nav() {
  return (
    <nav
      className="container-fluid"
      style={{
        zIndex: "100",
        backgroundColor: "rgba(17, 25, 31, 0.8)",
      }}
    >
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <a href="#" role="button">
            Button
          </a>
        </li>
      </ul>
    </nav>
  );
}
