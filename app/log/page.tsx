"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Flex, Table } from "@radix-ui/themes";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import { LogEntry } from "../api/get-log-database/route";

export default function Log() {
  const [sortOrder, setSortOrder] = useState("descending");
  const [logs, setLogs] = useState<LogEntry[]>([]);

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
      }
    };
    fetchData();
  }, []);

  console.log(logs);
  const handleSortButtonClick = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };
  const arrow = sortOrder === "ascending" ? "↓" : "↑";
  return (
    <Box>
      <Box py="3">
        <Flex align="baseline" gap="2">
          <Heading as="h1" size="7">
            Log
          </Heading>
          <LastUpdatedBadge />
        </Flex>
        <Text>Things I have done and am proud of :)</Text>
      </Box>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Date <button onClick={handleSortButtonClick}>{arrow}</button></Table.Cell>
            <Table.Cell>Title</Table.Cell>
            <Table.Cell>Media</Table.Cell>
            <Table.Cell>Link</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {logs
            .sort((a, b) => {
              const dateA = new Date(a.date).getTime();
              const dateB = new Date(b.date).getTime();
              return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
            })
            .map((log) => (
              <Table.Row key={log.id}>
                <Table.Cell>{log.date}</Table.Cell>
                <Table.Cell>{log.title}</Table.Cell>
                <Table.Cell>{log.media}</Table.Cell>
                <Table.Cell>
                  <a href={log.link} target="_blank" className="break-all text-blue-900 underline hover:bg-indigo-950 hover:text-white">
                    {log.link}
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
