import * as React from "react";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Happy Shopping ... ! 👍">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name!}
          />
          <Link to={`/products/${sticker.id}`}>
            <h2>{sticker.name}</h2>
            <h4>${sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 300)
        }
      }
    }
  }
`;

export const Head = () => <Helmet title="HOME" />;
// Head는 gatsby의 framework로써 helmet처럼 사용 가능함
