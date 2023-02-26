import { graphql, PageProps } from "gatsby";
import React from "react";
import Helmet from "../components/Helmet";
import Layout from "../components/Layout";

export default function Blog({ data }: PageProps<Queries.contentDataQuery>) {
  // PageProps라는 자체 interface를 가져와서 사용
  // Queries 값은 정적으로 가져올때랑 동일한 방법으로 가져옴
  return (
    <Layout title="Welcome to my blog!">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h4>
              Writter : {file.frontmatter?.author} in{" "}
              {file.frontmatter?.category}
            </h4>
            <h5>{file.frontmatter?.date}</h5>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query contentData {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "YYYY.MM.DD")
          title
        }
        excerpt(pruneLength: 25)
      }
    }
  }
`;

export const Head = () => <Helmet title="BLOG" />;
