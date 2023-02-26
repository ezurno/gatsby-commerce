import * as React from "react";
import Layout from "../components/Layout";
import Helmet from "../components/Helmet";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="Happy Shopping ... ! 👍">
      <StaticImage
        height={300}
        src="https://images.unsplash.com/photo-1581706537575-8080020a72d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=473&q=80"
        alt="Sticker Image"
      />
      {/* Static으로 img를 넣으면 사이즈를 조절해 주는 기능도 포함 되어 있음 값을 저장하고 새로 rendering 해서 배포 함 */}
    </Layout>
  );
}

export const Head = () => <Helmet title="HOME" />;
// Head는 gatsby의 framework로써 helmet처럼 사용 가능함
