import React from "react";
import { Flex, Box, Text } from "@radix-ui/themes";
import { LinkedInLogoIcon, DimensionsIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer: React.FC = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <Box>
      <Flex py="8" justify="between">
        <Text size="3" as="p">
          © {getYear()} Remi Higuchi
        </Text>
        <Flex direction="column">
          <Link
            href="https://www.linkedin.com/in/hremi/"
            className="hover:bg-mint p-1/2 rounded flex items-center"
          >
            <LinkedInLogoIcon className="text-logo inline mr-1" />
            <Text>LinkedIn</Text>
          </Link>
          <Link
            href="https://makerworld.com/en/@remih"
            className="hover:bg-mint p-1/2 rounded flex items-center"
          >
            <DimensionsIcon className="text-logo inline mr-1" />
            <Text>MakerWorld</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
