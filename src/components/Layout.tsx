import { Link } from "gatsby";
import React from "react";
import Nav from "./Nav";
import "../styles.css";

interface ILayoutProps {
  children: any; // children props는 자체적으로 가져옴
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            
          </li>
          <li>
          </li>
          <li>
          </li>
        </ul>
      </nav> */}
      <Nav />
      <main
        className="container"
        style={{
          paddingTop: "100px",
          fontFamily: "'Shantell Sans', cursive",
        }}
      >
        <h1
          style={{
            fontFamily: "'Shantell Sans', cursive",
          }}
        >
          {title}
        </h1>
        {children}
      </main>
    </>
  );
}
