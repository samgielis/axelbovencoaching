import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  SlideFade,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { INSIGHT_AUDIOS } from "../../routes";
import { AppLink } from "../AppLink";

export const NewsLetterWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const isInsightAudios = useLocation().pathname === INSIGHT_AUDIOS;

  useEffect(() => {
    if (isInsightAudios) {
      return;
    }
    setTimeout(() => {
      onOpen();
    }, 2000);
  }, [onOpen, isInsightAudios]);

  // Af en toe een inzicht in je inbox?
  return (
    <Box pos="fixed" right={3} bottom={3}>
      <SlideFade in={isOpen}>
        <Stack bg="themeGreen.500" p={4} pr={6}>
          <Heading color="whit" fontSize={"2xl"} textAlign="center">
            Je leven op autopilot doorbreken?
          </Heading>
          <Button colorScheme={"whiteAlpha"} onClick={onClose}>
            <AppLink to={INSIGHT_AUDIOS}>
              Beluister nu gratis mijn insight audio's
            </AppLink>
          </Button>
          <Flex justifyContent={"center"}>
            <Button
              variant="ghost"
              colorScheme="blackAlpha"
              size="xs"
              onClick={onClose}
            >
              <AppLink to={INSIGHT_AUDIOS}>Meer leren</AppLink>
            </Button>
          </Flex>
          <IconButton
            onClick={onClose}
            pos="absolute"
            size="xs"
            borderRadius="0"
            top={-2}
            right={0}
            colorScheme={"whiteAlpha"}
            icon={<CloseIcon boxSize={2} />}
            aria-label="Sluit nieuwsbrief widget"
          />
        </Stack>
      </SlideFade>
    </Box>
  );
};
