import { Helmet } from "react-helmet-async";
import { PlaceholderScreen } from "../../../PlaceholderScreen";

export const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Axel Boven Coaching</title>
      </Helmet>
      <PlaceholderScreen title="Aanbod">
        We zijn momenteel nog druk bezig met het ontwikkelen van mijn website.
        Wanneer mijn blog opgestart is vind je hier updates over mijn
        experimenten, interessante lectuur en andere bevindingen.
      </PlaceholderScreen>
    </>
  );
};
