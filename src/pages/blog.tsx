import React from "react";
import Helmet from "../components/Helmet";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout title="Welcome to my blog!">
      <h1></h1>
    </Layout>
  );
}

export const Head = () => <Helmet title="BLOG" />;
