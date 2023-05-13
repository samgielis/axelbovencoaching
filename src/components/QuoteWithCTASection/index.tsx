import { Box, BoxProps, Container, Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type QuoteWithCTASectionProps = PropsWithChildren<{
  title: string;
  pb?: BoxProps['pb']
  pt?: BoxProps['pt']
}>;

export const QuoteWithCTASection = ({
  title,
  children: action,
  pb,
  pt,
}: QuoteWithCTASectionProps) => {
  return (
    <Box w="100%" py={36} pb={pb} pt={pt}>
      <Container maxW="container.lg" centerContent p={5}>
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
