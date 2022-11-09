import { Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { AanbodSection } from "./AanbodSection";
import { ContactSection } from "./ContactSection";
import { GetuigenissenSection } from "./GetuigenissenSection";
import { MainSection } from "./MainSection";
import { MijnMissieSection } from "./MijnMissieSection";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Axel Boven Coacing</title>
      </Helmet>
      <Stack w="full" spacing={0}>
        <MainSection />
        <MijnMissieSection />
        <AanbodSection />
        <GetuigenissenSection />
        <ContactSection />
      </Stack>
    </>
  );
};
