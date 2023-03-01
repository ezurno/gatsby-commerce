import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";
import "../../styles.css";

export default function Blog({ data }: PageProps<Queries.contentDataQuery>) {
  // PageProps라는 자체 interface를 가져와서 사용
  // Queries 값은 정적으로 가져올때랑 동일한 방법으로 가져옴
  return (
    <Layout title="Welcome!  our customer's gest book">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h5
              style={{
                fontFamily: "'Shantell Sans', cursive",
              }}
            >
              {file.frontmatter?.date}
            </h5>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h4
                style={{
                  fontFamily: "'Shantell Sans', cursive",
                }}
              >
                {file.frontmatter?.title}
              </h4>
              <p>{file.excerpt}</p>
            </Link>

            <h5
              style={{
                fontFamily: "'Shantell Sans', cursive",
              }}
            >
              Writter : {file.frontmatter?.author} in{" "}
              {file.frontmatter?.category}
            </h5>
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
