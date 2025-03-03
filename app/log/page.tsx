"use client";
import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Text,
  Flex,
  Table,
  Skeleton,
  Card,
} from "@radix-ui/themes";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import { LogEntry } from "@/app/api/get-log-database/route";
import ViewToggleButton from "@/components/ViewToggleButton";

export default function Log() {
  const [sortOrder, setSortOrder] = useState("descending");
  const [view, setView] = useState(() => {
    if (window.innerWidth < 768) {
      return "cards";
    }
    return "table";
  }); // State to manage the current view
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

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

  const handleSortButtonClick = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };
  const arrow = sortOrder === "ascending" ? "↓" : "↑";

  const sortedLogs = logs.toSorted((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
    return sortOrder === "ascending" ? dateA - dateB : dateB - dateA;
  });

  return (
    <Box>
      <Box py="3">
        <Flex align="baseline" gap="2">
          <Heading as="h1" size="7">
            Log
          </Heading>
          <LastUpdatedBadge />
        </Flex>
        <Text>
          Media Coverage / Conference + Things I have done and am proud of :)
        </Text>
      </Box>

      {view === "table" ? (
        <Box>
          <Flex justify="end" mb="2">
            <ViewToggleButton view={view} setView={setView} />
          </Flex>
          <div className="overflow-x-auto">
            <Table.Root className="min-w-full" variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.Cell>
                    Date{" "}
                    <button onClick={handleSortButtonClick}>{arrow}</button>
                  </Table.Cell>
                  <Table.Cell>Title</Table.Cell>
                  <Table.Cell>Media / Event</Table.Cell>
                  <Table.Cell>Link</Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {loading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          <Skeleton />
                        </Table.Cell>
                        <Table.Cell>
                          <Skeleton />
                        </Table.Cell>
                        <Table.Cell>
                          <Skeleton />
                        </Table.Cell>
                        <Table.Cell>
                          <Skeleton />
                        </Table.Cell>
                      </Table.Row>
                    ))
                  : sortedLogs
                      .map((log) => (
                        <Table.Row key={log.id}>
                          <Table.Cell>{log.date}</Table.Cell>
                          <Table.Cell>{log.title}</Table.Cell>
                          <Table.Cell>{log.media}</Table.Cell>
                          <Table.Cell>
                            <a
                              href={log.link}
                              target="_blank"
                              className="break-all text-blue-900 underline hover:bg-mint"
                            >
                              {log.linkName}
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      ))}
              </Table.Body>
            </Table.Root>
          </div>
        </Box>
      ) : (
        <Box>
          <Flex justify="between" mb="2">
            <button onClick={handleSortButtonClick}>Latest {arrow}</button>
            <ViewToggleButton view={view} setView={setView} />
          </Flex>
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="p-4 mb-4 border rounded shadow">
                <Skeleton height="20px" width="50%" />
                <Skeleton height="20px" width="70%" />
                <Skeleton height="20px" width="90%" />
                <Skeleton height="20px" width="30%" />
              </Card>
            ))
          ) : (
            <Flex direction="column" gap="2">
              {" "}
              {sortedLogs
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
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
}
