import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type PlaceholderScreenProps = PropsWithChildren<{
  title: string;
}>;

export const PlaceholderScreen = ({
  title,
  children,
}: PlaceholderScreenProps) => {
  return (
    <Box bg="themeGreen.100" h="100vh" minH="100vh">
      <Container h="full">
        <Center h="full" w="100%">
          <Stack
            p={2}
            borderLeft={`10px solid var(--chakra-colors-themeGreen-300)`}
          >
            <Heading fontSize="4xl">{title}</Heading>
            <Text fontSize={"xl"}>{children}</Text>
          </Stack>
        </Center>
      </Container>
      ;
    </Box>
  );
};
