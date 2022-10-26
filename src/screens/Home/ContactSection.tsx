import { Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { CONTACT_PATH } from "../../routes";

export const ContactSection = () => {
  return (
    <QuoteWithCTASection title={"Heb je vragen of wil je graag samen verder?"}>
      <Center>
        <Button
          size={{ base: "md", sm: "lg" }}
          fontSize="2xl"
          as={Link}
          colorScheme={"themeGreen"}
          to={CONTACT_PATH}
          display="inline-flex"
        >
          Contacteer mij
        </Button>
      </Center>
    </QuoteWithCTASection>
  );
};
