"use client";

import { getNotionDatabase } from "@/service/notion";

export default function NotionApiTest() {
  const handleClick = () => {
    getNotionDatabase().then((res) => {
      console.log("client : " + res);
    });
  };
  return (
    <article>
      <button onClick={handleClick}>노션 테스트</button>
    </article>
  );
}
