import { Link } from "gatsby";
import React from "react";
import { FaGithubSquare, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

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
          <Link to={"/"}>
            <FaHome size={36} />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <FaInfoCircle size={36} />
          </Link>
        </li>
        <li>
          <Link to={"/blog"}>
            <MdRateReview size={36} />
          </Link>
        </li>
        <li>
          <a href="https://github.com/ezurno/gatsby-commerce">
            <FaGithubSquare size={36} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
