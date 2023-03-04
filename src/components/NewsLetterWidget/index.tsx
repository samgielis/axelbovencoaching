import { CloseIcon, EmailIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SlideFade,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Endpoints } from "../../utils/endpoints";

export const NewsLetterWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const isMobile = useIsMobile();

  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string; name: string }>();

  function onSubmit(values: { email: string }) {
    const handleError = () => {
      toast({
        title: "Er ging iets mis.",
        description:
          "Probeer het later nog eens of contacteer me op info@axelbovencoaching.be.",
        status: "error",
        isClosable: true,
      });
    };
    return new Promise((resolve, reject) => {
      fetch(Endpoints.NewsletterSubscribtion, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.status !== 200) {
            handleError();
            reject();
          } else {
            toast({
              title: "Ingeschreven.",
              description: "Je bent succesvol ingeschreven op de nieuwsbrief.",
              status: "success",
              isClosable: true,
            });
            resolve(undefined);
            onClose();
            onCloseModal();
          }
        })
        .catch((e) => {
          handleError();
          reject();
        });
    });
  }

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 2000);
  }, []);

  const AwareStack = isMobile ? Stack : HStack;
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
      <Modal isOpen={isModalOpen} onClose={onCloseModal} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <AwareStack spacing={5}>
                <Center p={5}>
                  <AspectRatio
                    ratio={1}
                    w={36}
                    bg="themeGreen.50"
                    p={5}
                    borderRadius="full"
                  >
                    <Box>
                      <EmailIcon color="themeGreen.500" fontSize={"6xl"} />
                    </Box>
                  </AspectRatio>
                </Center>

                <Stack spacing={6} flex={1}>
                  <Heading size="lg">Schrijf je in op mijn nieuwsbrief</Heading>

                  <FormControl id="name" isRequired>
                    <FormLabel>Naam</FormLabel>
                    <Input
                      type="text"
                      placeholder="Jouw naam"
                      {...register("name", {
                        required: "Naam is noodzakelijk",
                      })}
                      borderRadius={0}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="voorbeeld@gmail.com"
                      {...register("email", {
                        required: "E-mail is noodzakelijk",
                      })}
                      borderRadius={0}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Box>
                    <Button
                      colorScheme={"themeGreen"}
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Inschrijven
                    </Button>
                  </Box>
                </Stack>
              </AwareStack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
