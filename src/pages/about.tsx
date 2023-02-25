import React from "react";
import Helmet from "../components/Helmet";
import Layout from "../components/Layout";

export default function about() {
  return (
    <div>
      <Layout title="About us...">
        <p>we make shop</p>
      </Layout>
    </div>
  );
}

export const Head = () => <Helmet title="ABOUT" />;
