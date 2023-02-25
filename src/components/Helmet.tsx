import React from "react";

interface IHelmetProps {
  title: string;
}

export default function Helmet({ title }: IHelmetProps) {
  return <title>{title} | DevShop</title>;
} // 자동으로 Head에 반환되는 함수 생성
