import * as React from "react";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <>
      <Layout title="Happy Shopping ... ! 👍">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {data.allContentfulStickerPack.nodes.map((sticker) => (
            <article
              style={{
                maxHeight: " 500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                overflow: "hidden",
              }}
            >
              <Link to={`/products/${sticker.id}`}>
                <GatsbyImage
                  image={getImage(sticker.preview?.gatsbyImageData!)!}
                  alt={sticker.name!}
                />
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: "'Shantell Sans', cursive",
                  }}
                >
                  {sticker.name}
                </h4>
              </Link>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  $ {sticker.price}
                </span>
                <div>
                  <span className="material-symbols-outlined">add_box</span>

                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Layout>
    </>
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
