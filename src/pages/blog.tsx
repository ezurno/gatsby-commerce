import { graphql, PageProps } from "gatsby";
import React from "react";
import Helmet from "../components/Helmet";
import Layout from "../components/Layout";

export default function Blog({ data }: PageProps<Queries.titleDataQuery>) {
  // PageProps라는 자체 interface를 가져와서 사용
  // Queries 값은 정적으로 가져올때랑 동일한 방법으로 가져옴
  return (
    <Layout title="Welcome to my blog!">
      <ul>
        {data.allFile.nodes.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query titleData {
    allFile {
      nodes {
        name
      }
    }
  }
`; // 자체적으로 gatsby가 인식해서 연결해 줌

export const Head = () => <Helmet title="BLOG" />;
