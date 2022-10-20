import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type HeadingWithCTASectionProps = PropsWithChildren<{
  title: string;
}>;

export const HeadingWithCTASection = ({
  title,
  children: action,
}: HeadingWithCTASectionProps) => {
  return (
    <Box w="100%" py={36}>
      <Container maxW="container.lg" centerContent p={2}>
        <Stack spacing={10}>
          <Heading size={{ base: "xl", sm: "3xl" }} textAlign="center">
            {title}
          </Heading>
          {action}
        </Stack>
      </Container>
    </Box>
  );
};
