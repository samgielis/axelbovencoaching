import { Container, VStack, Heading, Box, Center } from "@chakra-ui/react";
import { useIsMobile } from "../../hooks/useIsMobile";

export const MainSection = () => {
  const isMobile = useIsMobile();
  const height = isMobile ? "55vh" : "85vh";
  return (
    <Box
      w="100%"
      position="relative"
      h={height}
      minH={height}
      color="white"
      _before={{
        h: "100%",
        w: "100%",
        bgImage: "/main.jpg",
        filter: "brightness(.9)",
        content: '""',
        pos: "absolute",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
        opacity: 0.9,
      }}
    >
      <Container maxW="container.xl" h="100%">
        <Center w="100%" h="100%">
          <VStack spacing={5} textAlign="center">
            <Heading
              size="4xl"
              fontSize={isMobile ? "7xl" : "9xl"}
              fontWeight="light"
              textTransform="uppercase"
            >
              Axel Boven
            </Heading>
            <Heading>Vrij en Verbonden Onderweg</Heading>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
};
