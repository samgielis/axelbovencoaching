import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { faDownload, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { NewsLetterModal } from "../../components/NewsLetterModal";
import { PageContainer } from "../../components/PageContainer";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { AudioCollection } from "./AudioCollection";

export const InsightAudios = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const downloadAudios = () => {
    downloadLinkRef.current?.click();
  };

  return (
    <>
      <Link
        href="/audios/insight-audios-axel-boven.zip"
        ref={downloadLinkRef}
        hidden
        download
      >
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
          pt={{ base: 16, md: 36 }}
        >
          <Heading textAlign={"center"} size="lg" color="themeGreen.400">
            Deze 3 eenvoudige maar krachtige inzichten gidsen je naar een
            bewuster leven, waar je tijd en ruimte vindt voor rust, plezier en
            geluk, zonder je ganse leven om te moeten gooien.
          </Heading>
          <VStack spacing={5}>
            <AudioCollection />

            <Text fontStyle={"italic"} opacity={0.9} px={4}>
              <chakra.span color="themeGreen.400">
                <FontAwesomeIcon icon={faLightbulb} />
              </chakra.span>{" "}
              Tip: Wie graag de vogeltjes hoort, luistert liefst met
              hoofdtelefoon.
            </Text>
          </VStack>
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
            <VStack spacing={8}>
              <Heading size="lg">Je leert...</Heading>
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
                  vertelt over de meest vrije spontane, vrolijke versie van
                  jezelf
                </ListItem>
              </List>
              <DownloadButton onClick={onOpen} />
            </VStack>
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
interface DownloadButtonProps {
  onClick(): void;
}

const DownloadButton = ({ onClick }: DownloadButtonProps) => {
  return (
    <Flex alignContent="center" justify={"center"}>
      <Button
        size="lg"
        leftIcon={<FontAwesomeIcon icon={faDownload} />}
        colorScheme="themeGreen"
        onClick={onClick}
      >
        Download audio's
      </Button>
    </Flex>
  );
};
