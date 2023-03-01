import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "../../components/Helmet";
import Layout from "../../components/Layout";
import "../../styles.css";

interface IBlogDetailProps {
  data: Queries.detailDataQuery;
  children: any;
}

function BlogDetail({ data, children }: IBlogDetailProps) {
  console.log(data);
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="Blog">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div
        style={{
          fontFamily: "'Shantell Sans', cursive",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {children}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query detailData($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`; // query 속 함수 args는 query에 요청 하는 방식. $
// query 에서 frontmatter__slug 값을 가져와 주세요. 하고 요청함
// eq 는 equipment

export const Head = ({ data }: IBlogDetailProps) => (
  <Helmet title={`${data.mdx?.frontmatter?.title}`} />
); // data 값을 받아서 Helmet 수정 해주기

export default BlogDetail;
