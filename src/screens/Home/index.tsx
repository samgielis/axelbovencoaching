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
        <title>Axel Boven Coaching</title>
        <meta
          name="description"
          content="Vrij & Verbonden Onderweg. Ik bied holistische coaching trajecten voor mensen die onrust ervaren en daar écht verandering in willen brengen door de te wandelen en vrij te bewegen in de buitenlucht."
        />
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
