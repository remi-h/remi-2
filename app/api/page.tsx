import { Heading, Box, Text } from "@radix-ui/themes";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";

export default function Api() {
  return (
    <Box>
      <Heading as="h1" size="9">API</Heading>
      <Text size="6" as="p">a software engineer</Text>
      <Text size="5" as="p">passionate about blending technical skills with a design-focused and business-aware approach</Text>
      <LastUpdatedBadge />
    </Box>
  );
}