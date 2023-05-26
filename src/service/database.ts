import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_NOTION_KEY,
});

export async function getDatabase() {
  console.log("database");
  console.log("notion 인스턴스" + JSON.stringify(notion));
  const databaseId = process.env.NEXT_NOTION_DATABASE_ID;
  return await notion.databases.query({
    database_id: databaseId,
  });
}
