import { Box, Button, Container, Heading, HStack, Stack, Wrap } from "@chakra-ui/react";
import { AanbodSection } from "./AanbodSection";
import { ContactSection } from "./ContactSection";
import { MainSection } from "./MainSection";
import { MijnMissieSection } from "./MijnMissieSection";

export const Home = () => {
  return (
    <Stack w="full">
      <MainSection />
      <MijnMissieSection />
      <AanbodSection />
      <ContactSection />
    </Stack>
  );
};
