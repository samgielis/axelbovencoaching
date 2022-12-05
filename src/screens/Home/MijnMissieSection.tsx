import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { MIJN_MISSIE_PATH } from "../../routes";

export const MijnMissieSection = () => {
  return (
    <>
      <div id="scroll-target" />
      <QuoteWithCTASection
        title={
          '"Lend me your eyes I can change what you see, but your soul you must keep totally free"'
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
    </>
  );
};
