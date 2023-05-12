import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { faDownload, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { NewsLetterModal } from "../../components/NewsLetterModal";
import { PageContainer } from "../../components/PageContainer";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";

export const InsightAudios = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const downloadAudios = () => {
    downloadLinkRef.current?.click();
  };
  return (
    <>
      <Link href='/audios/insight-audios-axel-boven.zip' ref={downloadLinkRef} hidden download>
        Download audio's
      </Link>
      <Helmet>
        <title>
          Doorbreek je leven op automatische piloot met deze 3 insight audios -
          Axel Boven Coaching
        </title>
      </Helmet>
      <Stack w="full" spacing={0}>
        <QuoteWithCTASection
          title={
            "Doorbreek je leven op automatische piloot met deze 3 insight audio's"
          }
          pb={10}
        >
          <Heading textAlign={"center"} size="lg" color="themeGreen.400">
            Deze 3 eenvoudige maar krachtige inzichten gidsen je naar een
            bewuster leven, waar je tijd en ruimte vindt voor rust, plezier en
            geluk, zonder je ganse leven om te moeten gooien.
          </Heading>
          <HStack
            spacing={5}
            w="full"
            justifyContent={"center"}
            display={["none", "none", "flex"]}
          >
            <AudioCard
              title="Inzicht: Over Durven Vertragen en Leren Verdwalen"
              imgSrc="/audios/audio-1.jpg"
            />
            <AudioCard
              title="Wandelmeditatie: Vind Je Natuurlijk Ritme Via Je Voeten"
              imgSrc="/audios/audio-2.jpg"
            />
            <AudioCard
              title="Embodiment Oefening: Van Stuck Naar Spelen"
              imgSrc="/audios/audio-3.jpg"
            />
          </HStack>
          <Flex alignContent="center" justify={"center"}>
            <Button
              size="lg"
              leftIcon={<FontAwesomeIcon icon={faDownload} />}
              colorScheme="themeGreen"
              onClick={onOpen}
            >
              Download audio's
            </Button>
          </Flex>
        </QuoteWithCTASection>
        <Box bg="themeGreen.50">
          <PageContainer hasCustomHeading>
            <Heading size="lg" mb="1em">
              Je leert...
            </Heading>
            <List fontSize={["md", "lg", "2xl"]}>
              <ListItem>
                ... het geheim van <b>vrij zijn in het moment</b> (en hoe de
                vogeltjes je dat kunnen vertellen)
              </ListItem>
              <ListItem>
                ... hoe je{" "}
                <b>invloed kan nemen over jouw aandacht en bewustzijn</b> (en
                wat jouw voeten hiermee te maken hebben)
              </ListItem>
              <ListItem>
                ... <b>voelen wat je lichaam weet</b> maar je mind je niet
                vertelt over de meest vrije spontane, vrolijke versie van jezelf
              </ListItem>
            </List>
          </PageContainer>
        </Box>
      </Stack>
      <NewsLetterModal
        title="Schrijf je in op mijn nieuwsbrief en ontvang meteen je audio's!"
        isOpen={isOpen}
        onClose={onClose}
        onSucces={downloadAudios}
      />
    </>
  );
};

interface AudioCardProps {
  imgSrc: string;
  title: string;
}
const AudioCard = ({ imgSrc, title }: AudioCardProps) => {
  return (
    <AspectRatio
      justifySelf={"center"}
      borderRadius={"md"}
      overflow={"hidden"}
      ratio={1}
      w={{ base: "230px", lg: "250px" }}
      pos="relative"
      boxShadow={"md"}
    >
      <VStack>
        <Box bg="black" borderRadius={"md"}>
          <Image opacity={0.7} borderRadius={"md"} src={imgSrc} />
        </Box>
        <Heading
          p={3}
          background="linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,212,255,0) 100%)"
          pos={"absolute"}
          bottom={0}
          size="md"
          color="white"
        >
          {title}
        </Heading>
        <Box
          pos="absolute"
          color={"white"}
          fontSize={"7xl"}
          top={0}
          bottom={0}
          pt={10}
          margin="auto"
          opacity={0.9}
        >
          <FontAwesomeIcon icon={faHeadphones} />
        </Box>
      </VStack>
    </AspectRatio>
  );
};
