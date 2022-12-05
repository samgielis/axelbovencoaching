import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "../../components/Card";
import { QuoteWithCTASection } from "../../components/QuoteWithCTASection";
import { TitledSection } from "../../components/TitledSection";

declare global {
  var Calendly: any;
}

export const Contact = () => {
  useEffect(() => {
    const calendlyContainer = document.getElementById("calendly-container");
    if (calendlyContainer?.hasChildNodes()) return;
    Calendly.initInlineWidget({
      url: "https://calendly.com/axelboven/kennismakingsgesprek?text_color=1a202c&primary_color=7ba05f&hide_landing_page_details=1&hide_gdpr_banner=1",
      parentElement: document.getElementById("calendly-container"),
      prefill: {},
      utm: {},
    });
  });

  return (
    <>
      <Helmet>
        <title>Contact - Axel Boven Coaching</title>
      </Helmet>
      <Stack w="full" spacing={0}>
        <QuoteWithCTASection
          title={
            '"A mind that is stretched, can never go back to its old dimensions"'
          }
        />
        <TitledSection bgColor={"themeGreen.400"} title={"Contact"}>
          <SimpleGrid spacing={5} w="full" minChildWidth={"350px"}>
            <Card color="bodyText" p={4} flex={1}>
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

                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="email" />
                    </FormControl>

                    <FormControl>
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
                    as={Link}
                    variant="link"
                  >
                    info@axelbovencoaching.be
                  </Button>
                  .
                </Text>
              </Stack>
            </Card>

            <Stack flex={1} color="white" spacing={4} h="full">
              <Card flex={1}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10028.062197743913!2d5.035744372471718!3d51.0712630154928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1476f49d82a5f%3A0xcc20d4432680ddc3!2sAxel%20Boven%20Coaching!5e0!3m2!1sen!2sbe!4v1667840004047!5m2!1sen!2sbe"
                  title="Google Maps: Schoterweg 242b"
                  width="100%"
                  height="100%"
                  style={{ border: "0", minHeight: "450px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </Stack>
          </SimpleGrid>
        </TitledSection>
        <TitledSection
          bgColor={"themeGreen.100"}
          title={"Kennismakingsgesprek"}
        >
          <Stack spacing={4}>
            <Text fontSize="xl">
              Heb je nog vragen? Of wil je graag een individueel traject
              starten? Reserveer dan hier je plekje voor een (gratis) online
              kennismakingsgesprek via Zoom.
            </Text>
            <div id="calendly-container" style={{ height: "1000px" }} />
          </Stack>
        </TitledSection>
      </Stack>
    </>
  );
};
