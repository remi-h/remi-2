import { Heading, Box, Link, Button, Flex, Text } from "@radix-ui/themes";

export default function Friends() {
  const pages = [
    {
      id: 1,
      name: "Hotel & Dining, Remi",
      link: "/friends/hotel",
    },
    {
      id: 2,
      name: "Restaurants Recommendations",
      link: "/friends/restaurants",
    },
  ];
  return (
    <Box>
      <Box py="3">
        <Flex align="baseline" gap="2">
          <Heading as="h1" size="7">
            For My Friends
          </Heading>
        </Flex>
        <Text>Passwords needed to open links below</Text>
      </Box>
      <Flex gap="1">
      {pages.map((page) => (
        <Link href={page.link} key={page.id}>
          <Button radius="none" variant="outline">
            {page.name}
          </Button>
        </Link>
      ))}
      </Flex>
    </Box>
  );
}
