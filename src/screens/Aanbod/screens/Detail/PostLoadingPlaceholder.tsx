import { Center, Spinner } from "@chakra-ui/react";

export const PostLoadingPlaceholder = () => {
  return (
    <Center w="100%" minH="500px">
      <Spinner size="xl" />
    </Center>
  );
};
