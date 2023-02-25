import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface IHelmetProps {
  title: string;
}

export default function Helmet({ title }: IHelmetProps) {
  const data = useStaticQuery<Queries.helmetDataQuery>(graphql`
    query helmetData {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `); // 정적으로 query 값을 가져오는 함수. localhost:8000의 graphQl 의 값에서 가져올 값을 넣어서 사용
  // 자동으로  helmetData 값을 type 변환을 하기 때문에 generic type을 찾아보면 type이 있음 가져다 쓰면 됨

  console.log(data);

  return (
    <title>
      {title} | {data?.site?.siteMetadata?.title}
    </title>
  );
} // 자동으로 Head에 반환되는 함수 생성
