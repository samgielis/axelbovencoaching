import { Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { QuoteWithCTASection } from "../../../../components/QuoteWithCTASection";
import { PlaceholderScreen } from "../../../PlaceholderScreen";

export const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Aanbod - Axel Boven Coaching</title>
      </Helmet>
      <Stack spacing={0} w="full">
        <QuoteWithCTASection title={'"The fire, it speaks."'} />
        <PlaceholderScreen title="Aanbod">
          We zijn momenteel nog druk bezig met het ontwikkelen van mijn website.
          Je vindt hier binnenkort meer over de trajecten en workshops die ik
          aanbied. Een voorsmaakje vind je al op de homepage.
        </PlaceholderScreen>
      </Stack>
    </>
  );
};
