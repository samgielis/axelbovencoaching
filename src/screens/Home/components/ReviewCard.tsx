import { Avatar, Center, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Card } from "../../../components/Card";

interface ReviewCardProps {
  name: string;
  subtitle?: string;
  imageSrc?: string;
}

export const ReviewCard = ({
  name,
  subtitle,
  imageSrc,
  children,
}: PropsWithChildren<ReviewCardProps>) => {
  return (
    <Card p={6} py={12}>
      <Center h="100%">
        <Stack spacing={8} align="center" textAlign={"center"}>
          <Text fontSize="xl" as={"i"}>
            "{children}"
          </Text>
          <HStack spacing={4}>
            <Avatar name={name} src={imageSrc} size='lg' />
            <Stack spacing={1}>
              <Heading fontSize="2xl" textAlign={'start'}>{name}</Heading>
              <Heading fontSize="md" color="themeGreen.600">
                {subtitle}
              </Heading>
            </Stack>
          </HStack>
        </Stack>
      </Center>
    </Card>
  );
};
