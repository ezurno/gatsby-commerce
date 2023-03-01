import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import "../../styles.css";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  // console.log로 args를 찍어보면 값 받아오는게 다름
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
      <h2
        style={{
          fontFamily: "'Shantell Sans', cursive",
        }}
      >
        ${data.contentfulStickerPack?.price!}
      </h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
