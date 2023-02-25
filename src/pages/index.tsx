import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";

export default function IndexPage() {
  return (
    <Layout title="Happy Shopping ... ! 👍">
      <h1></h1>
    </Layout>
  );
}

export const Head = () => <Helmet title="HOME" />;
// Head는 gatsby의 framework로써 helmet처럼 사용 가능함
