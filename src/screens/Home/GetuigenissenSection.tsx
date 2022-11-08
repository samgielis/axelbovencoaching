import { SimpleGrid } from "@chakra-ui/react";
import { TitledSection } from "../../components/TitledSection";
import { ReviewCard } from "./components/ReviewCard";

export const GetuigenissenSection = () => {
  return (
    <TitledSection bgColor="themeGreen.200" title={"Getuigenissen"}>
      <SimpleGrid minChildWidth={"350px"} spacing={4} justifyContent="center">
        <ReviewCard
          name={"Nele Flamang"}
          subtitle={`Auteur "Als Je Van Spelen Leren Kan"`}
        >
          Axel is een gids aan je zijde die zelf al goed door de modder heeft
          geploeterd en al meer dan voldoende op het droge heeft om een stevige
          hand uit te reiken.
        </ReviewCard>
        <ReviewCard name={"Toon Proost"}>
          Axel luistert zonder oordeel en dat doet enorm veel deugd. Daarnaast
          durft hij de kern te benoemen, wat me heel erg verder helpt.
        </ReviewCard>
        <ReviewCard name={"Lotte De Leeuw"}>
          Axel heeft een passie voor wat mensen beweegt. Dat zie je aan de
          sprankel in zijn ogen als hij je coacht. Axel kijkt naar je als mens
          en pas daarna naar theoretische modellen of werkvormen, steeds op maat
          van jouw vraag en situatie.
        </ReviewCard>
      </SimpleGrid>
    </TitledSection>
  );
};
