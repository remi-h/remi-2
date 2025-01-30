import { Heading, Box, Text, Flex } from "@radix-ui/themes";
// import Link from "next/link";

export default function Restaurants() {
  return (
    <Box py="3">
      <Flex align="baseline" gap="2">
        <Heading as="h1" size="7">
          Restaurants Recommendations
        </Heading>
      </Flex>
      <Text>Select the location</Text>
    </Box>
  );
}
