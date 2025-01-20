import React from "react";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <Flex justify={"between"} align={"center"} py="3">
      <Link href="/">
        <Image src="/logo-r.png" alt="Remi Higuchi" width={50} height={50} />
      </Link>
      <Flex gap="3">
        <Link href="/log">Log</Link>
        <Link href="/friends">Friends?</Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
