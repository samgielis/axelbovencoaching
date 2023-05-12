import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type QuoteWithCTASectionProps = PropsWithChildren<{
  title: string;
  pb?: number
}>;

export const QuoteWithCTASection = ({
  title,
  children: action,
  pb,
}: QuoteWithCTASectionProps) => {
  return (
    <Box w="100%" py={36} pb={pb}>
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
