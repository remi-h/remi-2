"use client";
import { LogEntry } from "@/app/api/get-log-database/route";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder] = useState("descending"); // State to manage sort order

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-log-database", {
          method: "GET",
        });
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const sortedLogs = logs.toSorted((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
    return sortOrder === "ascending" ? dateA - dateB : dateB - dateA;
  });

  console.log(logs);
  return (
    <Box>
      <Heading as="h1" size="9">
        Hi! I&apos;m Remi,
      </Heading>
      <Text size="6" as="p">
        a software engineer
      </Text>
      <Text size="5" as="p">
        passionate about blending technical skills with a design-focused and
        business-aware approach
      </Text>
      <LastUpdatedBadge />
      <Flex pt="4" pb="2" justify="between">
        <Heading as="h2" size="4">
          Highlights
        </Heading>
        <Link href="/log" className="text-blue-900 hover:bg-mint">
          View all →
        </Link>
      </Flex>
      {loading ? (
        <Grid columns={{ initial: "1", sm: "3" }} gap="2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="p-4 mb-4 border rounded shadow">
              <Skeleton height="20px" width="50%" />
              <Skeleton height="20px" width="70%" />
              <Skeleton height="20px" width="90%" />
              <Skeleton height="20px" width="30%" />
            </Card>
          ))}
        </Grid>
      ) : (
        <Grid columns={{ initial: "1", sm: "3" }} gap="2">
          {sortedLogs
            .filter((log) => log.featured)
            .map((log) => (
              <Card key={log.id}>
                <Flex direction="column" gap="1">
                  <Text color="gray" size="1">
                    {log.date}
                  </Text>
                  <Text weight="bold" size="2">
                    {log.title}
                  </Text>
                  <Text size="1">{log.media}</Text>
                  <Text size="1">
                    <a
                      href={log.link}
                      target="_blank"
                      className="break-all text-blue-900 underline hover:bg-mint"
                    >
                      {log.linkName}
                    </a>
                  </Text>
                </Flex>
              </Card>
            ))}
        </Grid>
      )}
    </Box>
  );
}
