import { Link } from "gatsby";
import React from "react";
import Helmet from "../components/Helmet";
import Layout from "../components/Layout";

export default function about() {
  return (
    <div>
      <Layout title="About this...🤣">
        <p>Make a shop imitate real sticker-mall . . . </p>
        <br />
        <br />
        <br />

        <p>I used Gatsby, but it's too hard. Xd</p>
        <br />
        <br />
        <br />

        <p>I think I need to use it a little bit more.</p>
        <br />
        <br />
        <br />
        <p>
          <Link to="https://github.com/ezurno/gatsby-commerce">
            https://github.com/ezurno/gatsby-commerce
          </Link>
        </p>
        <br />
        <br />
        <br />
        <p>this is my github link !</p>
        <br />
        <br />
      </Layout>
    </div>
  );
}

export const Head = () => <Helmet title="ABOUT" />;
