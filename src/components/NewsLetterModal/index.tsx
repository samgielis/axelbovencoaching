import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { EmailIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Center, AspectRatio, Stack, Heading, Box, HStack } from "@chakra-ui/layout"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal"
import { useIsMobile } from "../../hooks/useIsMobile"
import { Endpoints } from "../../utils/endpoints"
import { useToast } from "@chakra-ui/toast"
import { useForm } from "react-hook-form"

interface NewsLetterModalProps {
    title?: string;
    isOpen: boolean;
    onClose(): void;
    onSucces?(): void;
}
export const NewsLetterModal = ({title, isOpen, onClose, onSucces}:NewsLetterModalProps) => {  
    const isMobile = useIsMobile();

    const AwareStack = isMobile ? Stack : HStack;
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
              if (response.status === 200) {
                handleError();
                reject();
              } else {
                toast({
                  title: "Je bent succesvol ingeschreven op de nieuwsbrief.",
                  description:
                    "Je krijgt zo meteen een mail in je inbox. Check zeker ook je spam!",
                  status: "success",
                  isClosable: true,
                });
                resolve(undefined);
                onSucces && onSucces();
                onClose();
              }
            })
            .catch((e) => {
              handleError();
              reject();
            });
        });
      }
    return <Modal isOpen={isOpen} onClose={onClose} size="2xl">
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
              <Heading size="lg">{title || 'Schrijf je in op mijn nieuwsbrief'}</Heading>

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
}