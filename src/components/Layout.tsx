import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any; // children props는 자체적으로 가져옴
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div>
      <nav>
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
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
