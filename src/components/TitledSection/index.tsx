import { Box, Container, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type TitledSectionProps = PropsWithChildren<{
  bgColor: string;
  title: string;
  useAsScrollbox?: boolean;
}>;

export const TitledSection = ({
  title,
  bgColor,
  children,
  useAsScrollbox,
}: TitledSectionProps) => {
  return (
    <Box py={16} bg={bgColor}>
      <Container maxW="container.xl" mb={10}>
        <Heading size="2xl" color="white" textDecor="underline">
          {title}
        </Heading>
      </Container>
      <Container
        maxW="container.xl"
        pr={useAsScrollbox ? 0 : undefined}
        bg={bgColor}
        overflow="scroll"
        pos={"relative"}
      >
        {children}
        {useAsScrollbox && (
          <Box
            w={5}
            pos="absolute"
            h="100%"
            top={0}
            right={0}
            bgGradient={`linear(to-r, rgba(0,0,0,0), ${bgColor})`}
          />
        )}
      </Container>
    </Box>
  );
};
