import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

dotenv.config();
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export type LogEntry = {
  id: string;
  date: string;
  media: string;
  title: string;
  link: string;
  linkName: string;
  featured: boolean;
};
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export async function GET() {
  const databaseId = "18a438aec64080839cadf140371e8023";
  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    });
    const logs: LogEntry[] = response.results
      .filter((item): item is PageObjectResponse => item.object === "page")
      .map((item) => {
        const properties = item.properties;
        return {
          id: item.id,
          date:
            properties.Date?.type === "date"
              ? formatDate(properties.Date.date?.start ?? "")
              : "",
          media:
            properties.Media?.type === "rich_text"
              ? (properties.Media.rich_text?.[0]?.plain_text ?? "")
              : "",
          title:
            properties.Title?.type === "title"
              ? (properties.Title.title?.[0]?.plain_text ?? "")
              : "",
          link:
            properties.Link?.type === "rich_text"
              ? (properties.Link.rich_text?.[0]?.href ?? "")
              : "",
          linkName:
            properties.Link?.type === "rich_text"
              ? (properties.Link.rich_text?.[0]?.plain_text ?? "")
              : "",
          featured:
            properties.Featured?.type === "select"
              ? properties.Featured.select?.name === "true"
              : false,
        };
      });

    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

