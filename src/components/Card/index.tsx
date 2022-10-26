import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Card = (props: PropsWithChildren<BoxProps>) => {
  return (
    <Box
      bg="white"
      p={2}
      {...props}
      borderRadius="md"
      boxShadow="sm"
      overflow="hidden"
    />
  );
};
