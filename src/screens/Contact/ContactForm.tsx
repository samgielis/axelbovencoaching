import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const ContactForm = () => {
  return (
    <Stack spacing={4}>
      <Heading size="lg">Email</Heading>
      {/* When you change this, change helper form in index as well */}
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <Stack>
          <FormControl>
            <FormLabel>Onderwerp</FormLabel>
            <Input type="text" name="subject" />
          </FormControl>

          <FormControl>
            <FormLabel>Naam</FormLabel>
            <Input type="text" name="name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Bericht</FormLabel>
            <Textarea name="message" />
          </FormControl>

          <Button type="submit" colorScheme="themeGreen">
            Versturen
          </Button>
        </Stack>
      </form>
      <Text fontSize="lg">
        Je kan ook gewoon bij mij terecht via{" "}
        <Button
          size="lg"
          href="mailto:info@axelbovencoaching.be"
          as={"a"}
          variant="link"
          colorScheme="themeGreen"
        >
          info@axelbovencoaching.be
        </Button>
        .
      </Text>
    </Stack>
  );
};
