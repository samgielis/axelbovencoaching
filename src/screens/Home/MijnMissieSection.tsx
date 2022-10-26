import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { MIJN_MISSIE_PATH } from "../../routes";

export const MijnMissieSection = () => {
  return (
    <QuoteWithCTASection
      title={
        '"Ik help mensen om binnenin rust en vrijheid te ervaren, ook als de buitenwereld woelig is."'
      }
    >
      <Button
        size={{ base: "md", sm: "lg" }}
        fontSize="2xl"
        as={Link}
        variant="link"
        colorScheme={"themeGreen"}
        to={MIJN_MISSIE_PATH}
      >
        Lees meer over mijn missie en hoe ik werk.
      </Button>
    </QuoteWithCTASection>
  );
};
