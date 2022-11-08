import { Stack } from "@chakra-ui/react";
import { AanbodSection } from "./AanbodSection";
import { ContactSection } from "./ContactSection";
import { GetuigenissenSection } from "./GetuigenissenSection";
import { MainSection } from "./MainSection";
import { MijnMissieSection } from "./MijnMissieSection";

export const Home = () => {
  return (
    <Stack w="full">
      <MainSection />
      <MijnMissieSection />
      <AanbodSection />
      <GetuigenissenSection />
      <ContactSection />
    </Stack>
  );
};
