import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";

export default function Blog({ data }: PageProps<Queries.contentDataQuery>) {
  // PageProps라는 자체 interface를 가져와서 사용
  // Queries 값은 정적으로 가져올때랑 동일한 방법으로 가져옴
  return (
    <Layout title="Welcome to my blog!">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
            </Link>
            <h4>
              Writter : {file.frontmatter?.author} in{" "}
              {file.frontmatter?.category}
            </h4>
            <h5>{file.frontmatter?.date}</h5>
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
          slug
        }
        excerpt(pruneLength: 25)
      }
    }
  }
`;

export const Head = () => <Helmet title="BLOG" />;
