import React from "react";
import { Box, Text } from "@radix-ui/themes";

const Footer: React.FC = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <Box py="8">
      <Text size="2" as="p">
        © {getYear()} Remi Higuchi
      </Text>
    </Box>
  );
};

export default Footer;
