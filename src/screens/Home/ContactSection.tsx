import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import { CONTACT_PATH, MIJN_MISSIE_PATH } from "../../routes";
import { HeadingWithCTASection } from "./components/HeadingWithCTASection";

export const ContactSection = () => {
  return (
    <HeadingWithCTASection
      title={"Heb je vragen of wil je graag samen verder?"}
    >
      <Button
        size={{ base: "md", sm: "lg" }}
        fontSize="2xl"
        as={Link}
        colorScheme={"green"}
        to={CONTACT_PATH}
      >
        Contacteer mij
      </Button>
    </HeadingWithCTASection>
  );
};
