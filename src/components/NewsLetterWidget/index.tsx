import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  SlideFade,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { INSIGHT_AUDIOS } from "../../routes";
import { NewsLetterModal } from "../NewsLetterModal";

export const NewsLetterWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const isInsightAudios = useLocation().pathname === INSIGHT_AUDIOS;

  useEffect(() => {
    if (isInsightAudios) {
      return;
    }
    setTimeout(() => {
      onOpen();
    }, 2000);
  }, [onOpen, isInsightAudios]);

  return (
    <>
      <Box pos="fixed" right={3} bottom={3}>
        <SlideFade in={isOpen}>
          <Stack bg="themeGreen.500" p={4} pr={6}>
            <Heading color="whit" fontSize={"2xl"}>
              Af en toe een inzicht in je inbox?
            </Heading>
            <Button colorScheme={"whiteAlpha"} onClick={onOpenModal}>
              Schrijf je in op mijn nieuwsbrief!
            </Button>
            <IconButton
              onClick={onClose}
              pos="absolute"
              size="xs"
              borderRadius="0"
              top={-2}
              right={0}
              colorScheme={"whiteAlpha"}
              icon={<CloseIcon boxSize={2} />}
              aria-label="Sluit niewusbrief widget"
            />
          </Stack>
        </SlideFade>
      </Box>
      <NewsLetterModal isOpen={isModalOpen} onClose={onCloseModal} />
    </>
  );
};
